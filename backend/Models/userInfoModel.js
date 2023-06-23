import mongoose from "mongoose";

const userInfoModel = new mongoose.Schema({
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

    Solde: {
        type: Number,
        required: true
    }

  
});

export default mongoose.model("informations", userInfoModel);