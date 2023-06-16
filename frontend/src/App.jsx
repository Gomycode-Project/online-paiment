import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './Components/Login/Login';

function App() {
	return (
		<div>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
			
		</div>
	);
}

export default App;
