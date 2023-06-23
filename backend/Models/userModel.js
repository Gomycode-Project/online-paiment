import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
	Num_Compte: {
		type: String,
		unique: true,
	},

	Nom: {
		type: String,
		required: true,
	},

	Prenom: {
		type: String,
		required: true,
	},

	Adresse: {
		type: String,
		required: true,
	},

	Num_tel: {
		type: Number,
		required: true,
	},

	passWord: {
		type: String,
		required: true,
	},

	Email: {
		type: String,
		required: true,
	},
});

export default mongoose.model('clients', userModel);
