import React, { useRef, useState } from 'react';
import axios from 'axios';
import './Register.css';

export const Register = () => {
	const [resMessage, setResMessage] = useState(null);
	const [formState, setFormState] = useState(null);

	const onChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const Register = async (e) => {
		e.preventDefault();

		const { Prenom, Nom, Email, Adresse, Num_tel, passWord } = formState;
		if (!Prenom || !Nom || !Email || !Adresse || !Num_tel || !passWord) {
			return setResMessage('Please insert all the necessary info');
		}

		try {
			const res = await axios.post(
				'http://localhost:3000/auth/register',
				formState,
			);

			if (!res) {
				return;
			}

			const { data } = res;
			const { status, data: dt } = data;

			if (status != 'success') {
				return setResMessage(dt);
			}

			return setResMessage('Registered successfully');
		} catch (error) {}
	};
	return (
		<div>
			<form className='login-form' onSubmit={Register}>
				<img
					src='../public/img/freemoney-removebg-preview.png'
					alt='logo'
				/>
				<div>
					<div className='twoinputs'>
						<input
							onChange={onChange}
							name='Prenom'
							placeholder='First Name'
							type='text'
						/>
						<input
							onChange={onChange}
							name='Nom'
							placeholder='Last Name'
							type='text'
						/>
					</div>
					<div className='twoinputs'>
						<input
							onChange={onChange}
							name='Email'
							placeholder='Mail Address'
							type='text'
						/>
						<input
							onChange={onChange}
							name='Adresse'
							placeholder='Home Address'
							type='text'
						/>
					</div>
					<div className='twoinputs'>
						<input
							onChange={onChange}
							name='Num_tel'
							placeholder='Phone Number'
							type='text'
						/>
						<input
							onChange={onChange}
							name='passWord'
							placeholder='Password'
							type='password'
						/>
					</div>
					<div>
						<button>Register</button>
					</div>
				</div>
			</form>
		</div>
	);
};
