import express from 'express';
import { getSolde } from '../Controllers/SoldeControllers.js';

const SoldeRoutes = express.Router();

SoldeRoutes.post('/solde', getSolde);

export default SoldeRoutes;
