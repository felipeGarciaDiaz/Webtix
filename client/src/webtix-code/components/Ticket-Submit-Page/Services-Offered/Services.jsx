import React from 'react';
import { Grid, Typography } from '@mui/material';
import './Services.scss';
//Component for quickly creating additional UI elements of the services that the company offers to all the users with access to that company.
function Services(props) {
	return (
		<React.Fragment>
			<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
				<Typography align="center">
					<div id="services-block">
						{props.iconType}
						<p id="services-desc">{props.serviceDesc}</p>
					</div>
				</Typography>
			</Grid>
		</React.Fragment>
	);
}

export default Services;
