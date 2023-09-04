import React from 'react';
import Home from '../../views/Ticket-Submit-Page/Home';
import TicketingSystem from '../../views/Local-Admin-Page/TicketingSystem';
import Login from '../../views/Local-Login-Page/Login';
import Protected from './Protected';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Creates protected routes, that will only allow authorized users to access with authorized credentials.
//At this point it will be hard coded, securely into the server
//For commercial use for WEBBTIX this will be handled through a hashed sql table.
function Service(props) {
	return (
		<Router>
			<Routes>
				<Route element={<Protected />}>
					<Route element={<TicketingSystem />} path="/tickets" />
					<Route element={<TicketingSystem />} path="/api/db-data" />
				</Route>
				<Route path="/admin" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default Service;
