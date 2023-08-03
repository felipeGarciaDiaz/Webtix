import React, { useState, useEffect } from 'react';
import Ticket from './Ticket';
import socket from '../utils/socket';
//The ticketing system page, here the mySQL table will display a list of all active tickets to the admins and IT staff
function TicketingSystem(props) {
	const [ticketData, setData] = useState([]);

	useEffect(() => {
		socket.emit('request-tickets');
		socket.on('ticket-data', (data) => {
			setData(data);
			console.log('socket.io tickets data response: ' + data);
		});
	}, []);

	return (
		<div>
			<h1>Hello World</h1>
			{ticketData.map((row) => (
				<Ticket
					key={row.id}
					id={row.id}
					firstName={row.firstName}
					lastName={row.lastName}
					phone={row.phone}
					email={row.email}
					description={row.description}
				/>
			))}
		</div>
	);
}

export default TicketingSystem;
