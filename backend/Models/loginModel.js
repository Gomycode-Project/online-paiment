import mongoose from "mongoose";

const loginModel = new mongoose.Schema({
    Num_Compte: {
        type: String,
        required: true,
        unique: true,
    },
       
  //  Date_accès:{
  //    type: Date,
  //    required: true,
  //  },
  //  type_accès:{
  //   type: String,
  //   required: true,
  // }
});

export default mongoose.model("login", loginModel);