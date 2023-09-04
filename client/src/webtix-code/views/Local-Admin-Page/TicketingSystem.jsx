import React, { useState, useEffect } from 'react';
import Ticket from '../../components/Local-Admin-Page/Ticket/Ticket';
import Panel from '../../components/Local-Admin-Page/Panel/Panel';
import socket from '../../Utils/Networking/socket';
import './TicketingSystem.scss';
import { Grid } from '@mui/material';
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
			<Panel />
			<h1>Hello World</h1>
			<Ticket
				key="1"
				id="test-ticket"
				firstName="test"
				lastName="test"
				phone="test"
				email="test"
				description="test"
			/>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<h1>Test</h1>
					{ticketData.map((row) => (
						<Grid item xs={6}>
							<Ticket
								key={row.id}
								id={row.id}
								firstName={row.firstName}
								lastName={row.lastName}
								phone={row.phone}
								email={row.email}
								description={row.description}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</div>
	);
}

export default TicketingSystem;
