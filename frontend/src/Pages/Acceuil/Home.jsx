import React from 'react';


const {date, accNumber, value, solde} = props;

function Acceuil(props) {
	return (
		<div>
			<div className="menu"></div>
			<div className='main'>
				<div className='solde'></div>
				<div className='activity'>  
				{/* condition? array.forEach(element => map activity here {
				
				});:null */}
				
            	</div>
			</div>
			<div className="right">
				<div>Show all</div>
				<div>other button</div>
			</div>
		</div>
	);
}

export default Acceuil;
