import React from 'react';
import './Login.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/Register');

	return (
		<div>
			<form className='login-form'>
				<img
					src='../public/img/freemoney-removebg-preview.png'
					alt='logo'
				/>
				<div>
					<input
						placeholder='Phone Number or Card Number'
						type='text'
					/>
					<input placeholder='Password' type='text' />
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
