import React, { useState, useRef } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import './media/login.css';

function Login(props) {
	const [errorMessage, setErrorMessage] = useState('hidden');

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('user, pass: ' + username, password);
		const res = await fetch('/login-request', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});
		if (res.ok) {
			const { token } = await res.json();
			localStorage.setItem('token', token);
			window.location.href = '/tickets';
		} else {
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
							The unauthorized use of this route, is illegal.
						</p>
					</Typography>
				</div>
			</Grid>
		</React.Fragment>
	);
}

export default Login;
