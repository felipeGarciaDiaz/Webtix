import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import socket from './utils/socket';
import SentimentVerySatisfiedRoundedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';
function Form(props) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [request, setRequest] = useState('');

	const [isSubmit, setSubmit] = useState('');
	//instead of <form action='/repair' method='post' use fetch('/repair', {method: 'POST'})

	let getSubmitResponse = async (e) => {
		e.preventDefault();
		socket.emit('form-submit-request');
		try {
			let res = await fetch('/repair', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					email: email,
					phone: phone,
					request: request,
				}),
			});
			const result = await res.json();
			console.log(res.status);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		socket.on('form-complete', (data) => {
			setSubmit(true);
		});
	}, []);
	if (!isSubmit) {
		return (
			<React.Fragment>
				<form
					action="/repair"
					method="POST"
					onSubmit={getSubmitResponse}
				>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								sx="width: 80%"
								id="form-first-name"
								label="First Name"
								variant="outlined"
								name="firstName"
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								sx="width: 80%"
								id="form-last-name"
								label="Last Name"
								type="text"
								variant="outlined"
								name="lastName"
								onChange={(e) => setLastName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								sx="width: 90%"
								id="form-email"
								label="Email"
								type="email"
								inputProps={{
									inputMode: 'email',
									pattern:
										/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
								}}
								variant="outlined"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
							/>{' '}
						</Grid>
						<Grid item xs={12}>
							<TextField
								sx="width: 90%"
								id="form-phone"
								label="Phone"
								type="tel"
								inputProps={{
									inputMode: 'email',
									pattern:
										/^(\+\d{1,3}\s?)?(\d{1,3}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/gm,
								}}
								variant="outlined"
								name="phone"
								onChange={(e) => setPhone(e.target.value)}
							/>{' '}
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={4}
								placeholder="Let us know what your issue is:"
								type="text"
								inputProps={{
									inputMode: 'text',
									pattern:
										/^[\w\s.,?!@#$%^&*()-[\]{}:;"'<>\|]+$/u,
								}}
								sx="width: 90%"
								name="request"
								onChange={(e) => setRequest(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								id="submit-repair-request"
								variant="contained"
								type="submit"
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<h1 id="form-submit-response">
					Thank you for submitting your request!
				</h1>
				<SentimentVerySatisfiedRoundedIcon id="form-submit-response-icon" />
			</React.Fragment>
		);
	}
}

export default Form;
