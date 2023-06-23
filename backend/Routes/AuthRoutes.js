import express from "express";
import { Login, Register } from "../Controllers/AuthControllers.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/", Login);
AuthRoutes.post("/register", Register);

export default AuthRoutes;