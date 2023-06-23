import React from 'react';
import './Activity.css';

// const {testprop} = props

const data = [
	{
		date: '14/03/2023',
		accNumber: 1935245,
		value: '-56,000',
		solde: '45,000',
	},

	{
		date: '14/04/2023',
		accNumber: 1935245,
		value: '-10,00',
		solde: '35,000',
	},

	{
		date: '14/05/2023',
		accNumber: 1935245,
		value: '-15,000',
		solde: '20,000',
	},
];

function Activity() {
	return (
		<div className='activity'>
			<table>
				{data.map((val, key) => {
					return (
						<tr className='activity-values' key={key}>
							{/* map values here */}
							<td>{val.date}</td>
							<td>{val.accNumber}</td>
							<td>{val.value}</td>
							<td>{val.solde}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default Activity;
