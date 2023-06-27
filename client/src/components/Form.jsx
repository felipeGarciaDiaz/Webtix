import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@mui/material';
function Form(props) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [request, setRequest] = useState('');

	const [isSubmit, setSubmit] = useState(false);
	//instead of <form action='/repair' method='post' use fetch('/repair', {method: 'POST'})
	let getSubmitResponse = async (e) => {
		e.preventDefault();
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
			if (res.status === 200) {
				console.log('chatGPT why is this not executing?');
				fetch('/api/submitted', {
					method: 'GET',
				})
					.then((res) => res.json())
					.then((data) => {
						setSubmit(true || data.isSubmitted);
						console.log(data);
						console.log(
							data.isSubmitted,
							'test for isSubmit v 2.0.0'
						);
					})
					.catch((err) =>
						console.log(
							'fetch api error, unable to get data from back-end application: ' +
								err
						)
					);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<React.Fragment>
			<form action="/repair" method="POST" onSubmit={getSubmitResponse}>
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
}

export default Form;
