import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import socket from '../utils/socket';
function Ticket(props) {
	let [log, setLog] = useState('');
	let [ticketVisible, setTicketVisible] = useState('block');

	let handleSubmit = (e) => {
		const data = { log: log, ticketID: props.id };
		socket.emit('complete-ticket', data);
		setTicketVisible('none');
	};
	return (
		<React.Fragment>
			<div id="ticket-body" style={{ display: ticketVisible }}>
				<div id="ticket-description">
					<h5>
						{props.firstName}, {props.lastName}
					</h5>
					<h6>
						{props.phone} || {props.email}
					</h6>
					<p>{props.description}</p>
				</div>

				<TextField
					id="outlined-multiline-static"
					multiline
					rows={4}
					placeholder="Enter log for solution here:"
					onChange={(e) => setLog(e.target.value)}
				/>
				<Button
					id="complete"
					variant="contained"
					onClick={handleSubmit}
				>
					Complete
				</Button>

				<hr />
			</div>
		</React.Fragment>
	);
}

export default Ticket;
