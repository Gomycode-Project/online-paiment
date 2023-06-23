import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { Home } from './Pages/Acceuil/Home';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/Home' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
