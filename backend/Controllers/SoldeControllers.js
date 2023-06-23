import userInfoModel from '../Models/userInfoModel.js';

export const getSolde = async (req, res) => {
	const userFilter={$or:[{i},{passWord}]};
	try {
		const Solde = await userInfoModel.findOne(userFilter);

		if (!Solde) {
			return res.json({ status: 'error', data: 'There is an error' });
		}

		return res.json({ status: 'success', data: Solde });
	} catch (error) {
		
	} 
}; 


