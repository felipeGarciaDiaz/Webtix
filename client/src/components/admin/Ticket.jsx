import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import socket from '../utils/socket';
function Ticket(props) {
	let [log, setLog] = useState('');
	let handleSubmit = (e) => {
		socket.emit('complete-ticket', log);
	};
	return (
		<React.Fragment>
			<div id="ticket-body">
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
