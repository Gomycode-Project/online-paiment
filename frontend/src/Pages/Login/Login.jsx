import React, { useRef, useState } from 'react';
import './Login.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/Register');

	const [resMessage, setResMessage] = useState(null);
	const numero_compte = useRef(null);
	const passWord = useRef(null);

	const login = async (e) => {
		e.preventDefault();

		const numVal = numero_compte.current.value;
		const passWordVal = passWord.current.value;
		const body = { numero_compte: numVal, passWord: passWordVal };

		try {
			const res = await axios.post('http://localhost:3000/auth', body);

			if (!res) {
				return;
			}

			const { data } = res;
			const { status, data: dt } = data;

			if (status != 'success') {
				return setResMessage(dt);
			}

			return setResMessage('Logged in successfully');
		} catch (error) {}
	};

	return (
		<div>
			<form onSubmit={login} className='login-form'>
				<img
					src='../public/img/freemoney-removebg-preview.png'
					alt='logo'
				/>
				<div>
					<input
						ref={numero_compte}
						placeholder='Phone Number or Card Number'
						type='text'
					/>
					<input
						ref={passWord}
						placeholder='Password'
						type='password'
					/>
					<button>Log In</button>
				</div>
				<p>
					Don't have an account?{' '}
					<span onClick={handleClick}>Register</span>
				</p>
			</form>
		</div>
	);
};
