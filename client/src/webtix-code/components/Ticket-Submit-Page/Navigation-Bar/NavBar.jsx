import React from 'react';
import { Grid } from '@mui/material';
import './NavBar.scss';
//Simple navbar showcasing the companies name, and information available for that company.
function NavBar(props) {
	return (
		<React.Fragment>
			<Grid container>
				<Grid id="nav-bar" xs={12}>
					<h1 id="nav-title"> Dos Bros</h1>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default NavBar;
