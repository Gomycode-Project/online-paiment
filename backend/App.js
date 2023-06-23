import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import AuthRoutes from './Routes/AuthRoutes.js';
import SoldeRoutes from './Routes/SoldeRoutes.js';

import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

http.createServer(app);

mongoose
	.connect('mongodb://127.0.0.1:27017/Epaiement')
	.then(() => {
		console.log('database connected');
	})
	.catch((err) => {
		console.log(err);
	});

app.use('/auth', AuthRoutes);
app.use('/solde', SoldeRoutes);

app.listen(3000, () => {
	console.log('app is live on port 3000');
});


