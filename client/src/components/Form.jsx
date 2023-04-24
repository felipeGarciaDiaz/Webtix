import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
function Form(props) {
	return (
		<React.Fragment>
			<form action='/repair' method='POST'>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<TextField
							sx='width: 80%'
							id='form-first-name'
							label='First Name'
							variant='outlined'
							name='firstName'
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							sx='width: 80%'
							id='form-last-name'
							label='Last Name'
							variant='outlined'
							name='lastName'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							sx='width: 90%'
							id='form-email'
							label='Email'
							variant='outlined'
							name='email'
						/>{" "}
					</Grid>
					<Grid item xs={12}>
						<TextField
							sx='width: 90%'
							id='form-phone'
							label='Phone'
							variant='outlined'
							name='phone'
						/>{" "}
					</Grid>
					<Grid item xs={12}>
						<TextField
							id='outlined-multiline-static'
							multiline
							rows={4}
							placeholder='Let us know what your issue is:'
							sx='width: 90%'
							name='request'
						/>
					</Grid>
					<Grid item xs={12}>
						<Button id='submit-repair-request' variant='contained' type='submit'>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
}

export default Form;
