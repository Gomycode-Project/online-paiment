import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Activity from '../../Components/Home/activity';

// const {date, accNumber, value, solde} = props;

export const Home = (props) => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/transac');

	return (
		<div className='body'>
			<div className='main'>
				<div className='solde-container'>
					<div className='solde'>10,000</div>
					<div className='solde-text'>Balance</div>
				</div>
			</div>
			<div className='activity-container'>
				<table>
					<tr className='activity-title'>
						<th>Date</th>
						<th>Numero de compte</th>
						<th>Valeur</th>
						<th>Solde</th>
					</tr>
					<Activity />
				</table>
			</div>
			<div className='mobile-menu'>
				<button>test button 1</button>
				<button>test button 2</button>
				<button>test button 3</button>
				<button>test button 4</button>
			</div>
		</div>
	);
};
