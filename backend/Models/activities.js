import mongoose from "mongoose";

const activitiesModel = new mongoose.Schema({
	numero_compte: {
		type: String,
		required: true,
	},
	
    date_mvt: {
		type: Date,
		required: true,
	},

	montant: {
		type: Number,
		required: true,
	},

	numero_src: {
		type: String,
	},

	num_cart: {
		type: String,
	},
	type_operation: {
		type : String,
		required: true,
	},
});
export default mongoose.model('Activities', activitiesModel);