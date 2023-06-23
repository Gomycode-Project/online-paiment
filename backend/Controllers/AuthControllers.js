import loginModel from '../Models/loginModel.js';
import userModel from '../Models/userModel.js';
import jwt from 'jsonwebtoken';
import activitiesModel from '../Models/activities.js';

const Ncpt = () => {
	let numCompte = '007';
	for (let i = 0; i < 20; i++) {
		numCompte += Math.floor(Math.random() * i).toString();
	}

	return numCompte;
};

export const Register = async (req, res) => {
	const { body } = req;
	const { Num_Compte, Nom, Prenom, Adresse, Num_tel, passWord, Email } = body;

	try {
		if (!Nom || !Prenom || !Adresse || !Num_tel || !passWord || !Email) {
			return res.json({
				status: 'error',
				data: 'you need to send all the necessary info',
			});
		}

		const newuser = { Num_Compte: Ncpt(), ...body };

		const addUser = await userModel(newuser).save();

		if (!addUser) {
			return res.json({
				status: 'error',
				data: 'error while adding user try later',
			});
		}

		return res.json({
			status: 'success',
			data: 'you were added successfully un versement sera effectué sur la tab de mouvemennt de cet client ',
		});
	} catch (error) {
		console.log('🚀 ~ file: AuthControllers.js:6 ~ login ~ error:', error);
	}
};

export const Login = async (req, res) => {
	const { body } = req;
	const dat = new Date();
	const { Num_Compte } = body;
	try {
		if (!Num_Compte) {
			return res.json({
				status: 'error',
				data: 'you need to send le compte and password',
			});
		}

		//debut filtre

		const userFilter = { $or: [{ Num_Compte }] };
		//const ff={$and: [userFilter,{passWord}]};
		const findUser = await userModel.findOne(
			userFilter,
		); /*attendre jusqu la fin de la recherche */

		if (!findUser) {
			return res.json({
				status: 'error',
				data: 'no compte found whith this password',
			});
		}

		//fin filtre
		//const filter = { Num_Compte };

		//const findUser = await userModel.findOne(filter);

		//enregestrement login

		const addLogin = await loginModel(body).save();

		if (!addLogin) {
			return res.json({
				status: 'error',
				data: 'error while adding login try later',
			});
		}
		return res.json({
			status: 'success',
			data: 'you were added login successfully',
		});

		//fin enregestrement login

		// const { passWord: passWordDB } = findUser;

		// if (passWord != passWordDB) {
		// 	return res.json({ status: 'error', data: 'wrong password' });
		// }

		const tok = { Num_Compte };

		const token = jwt.sign(tok, 'Sjyend0s5');

		return res.json({ status: 'success', data: token });
	} catch (error) {
		console.log('🚀 ~ file: AuthControllers.js:45 ~ login ~ error:', error);
	}
};
export const addmvt = async (req, res) => {
	const { body } = req;
	const {
		Num_Compte,
		date_mvt,
		montant,
		numero_src,
		num_cart,
		type_operation,
	} = body;
	try {
		if (!Num_Compte || !date_mvt || !type_operation || !montant) {
			return res.json({
				status: 'error',
				data: 'failed to send money',
			});
		}

		const myMouv = await activitiesModel(body).save();

		if (!myMouv) {
			return res.json({
				status: 'error',
				data: 'error while adding mvt try later',
			});
		}

		return res.json({
			status: 'success',
			data: 'the movement is passed successfuly ',
		});
	} catch (error) {
		console.log('🚀 ~ file: AuthControllers.js:6 ~ login ~ error:', error);
	}
};
