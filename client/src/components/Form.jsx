import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
//This is the component that isplays the form on the homepage, this is where users can add there information for requests submitions to the company
function Form(props) {
	return (
		<React.Fragment>
			<form action='/repair' method='POST'>
				<Grid container spacing={2}>
					{/* First name of the user*/}

					<Grid item xs={6}>
						<TextField
							sx='width: 80%'
							id='form-first-name'
							label='First Name'
							variant='outlined'
							name='firstName'
						/>
					</Grid>
					{/* Last name of the user */}

					<Grid item xs={6}>
						<TextField
							sx='width: 80%'
							id='form-last-name'
							label='Last Name'
							variant='outlined'
							name='lastName'
						/>
					</Grid>
					{/* Email of the user*/}

					<Grid item xs={12}>
						<TextField
							sx='width: 90%'
							id='form-email'
							label='Email'
							variant='outlined'
							name='email'
						/>{" "}
					</Grid>
					{/* Phone number for the user*/}

					<Grid item xs={12}>
						<TextField
							sx='width: 90%'
							id='form-phone'
							label='Phone'
							variant='outlined'
							name='phone'
						/>{" "}
					</Grid>
					{/* Description of the service being requested by the user*/}

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
					{/* Submit button to send service over to web-server, form cleanup and security handled through the backend*/}

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
