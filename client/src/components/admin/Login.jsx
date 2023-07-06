import React, { useState, useRef } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import './media/login.css';

function Login(props) {
	// State variables
	const [errorMessage, setErrorMessage] = useState('hidden'); // Controls the visibility of the error message
	const [username, setUsername] = useState(''); // Stores the value of the username input field
	const [password, setPassword] = useState(''); // Stores the value of the password input field

	// Form submission handler
	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevents the default form submission behavior

		// Display the username and password in the console (for debugging purposes)
		console.log('user, pass: ' + username, password);

		// Send a login request to the server
		const res = await fetch('/login-request', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});

		if (res.ok) {
			// If the login request is successful, extract the token from the response
			const { token } = await res.json();

			// Store the token in the browser's local storage
			localStorage.setItem('token', token);

			// Redirect the user to the '/tickets' page
			window.location.href = '/tickets';
		} else {
			// If the login request fails, show the error message
			setErrorMessage('visible');
		}
	};

	return (
		<React.Fragment>
			<Grid container justifyContent="center" alignItems="center">
				<div id="login-block">
					<Typography align="center">
						<h1 id="login-title">Admin Login</h1>
						<p
							id="error-message"
							style={{ visibility: errorMessage }}
						>
							Wrong Username / Password
						</p>
						<form onSubmit={handleSubmit}>
							<Grid item xs={12}>
								<TextField
									id="username"
									name="username"
									variant="standard"
									label="username"
									size="small"
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
								<br />
							</Grid>
							<Grid item xs={12}>
								<br />
								<TextField
									id="password"
									type="password"
									name="password"
									variant="standard"
									label="password"
									size="small"
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<br />
							</Grid>
							<Grid item xs={12}>
								<br />
								<Button
									id="submit-login-request"
									variant="contained"
									type="submit"
								>
									Login
								</Button>
							</Grid>
						</form>
						<p id="l1">
							The unauthorized use of this route is illegal.
						</p>
					</Typography>
				</div>
			</Grid>
		</React.Fragment>
	);
}

export default Login;
