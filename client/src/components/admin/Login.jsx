import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import "./media/login.css";
function Login(props) {
	return (
		<React.Fragment>
			<Grid container justifyContent='center' alignItems='center'>
				<div id='login-block'>
					<Typography align='center'>
						<h1 id='login-title'>Admin Login</h1>
						<form action='/login-request' method='post'>
							<Grid item xs={12}>
								<TextField
									id='username'
									name='username'
									variant='standard'
									label='username'
									size='small'
								/>
								<br />
							</Grid>
							<Grid item xs={12}>
								<br />
								<TextField
									id='password'
									type='password'
									name='password'
									variant='standard'
									label='password'
									size='small'
								/>
								<br />
							</Grid>
							<Grid item xs={12}>
								<br />
								<Button id='submit-login-request' variant='contained' type='submit'>
									Login
								</Button>
							</Grid>
						</form>
						<p id='l1'>The unauthorized use of this route, is illegal.</p>
					</Typography>
				</div>
			</Grid>
		</React.Fragment>
	);
}

export default Login;
