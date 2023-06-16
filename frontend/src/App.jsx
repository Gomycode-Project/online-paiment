import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Login } from './Components/Login/Login';

function App() {
	return (
		<div>
			<Login />
		</div>
	);
}

export default App;
