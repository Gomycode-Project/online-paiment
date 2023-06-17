import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
