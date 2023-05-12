import React from "react";
import Home from "../Home";
import Nav from "../NavBar"
import Services from "../Services"
import TicketingSystem from "./TicketingSystem";
import Login from "./Login";
import Protected from "./Protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Creates protected routes, that will only allow authorized users to access with authorized credentials.
//At this point it will be hard coded, securely into the server
//For commercial use for WEBBTIX this will be handled through a hashed sql table.
function Service(props) {
	return (
		<Router>
			<Routes>
				<Route element={<Protected />}>
					<Route element={<TicketingSystem />} path='/tickets' />
				</Route>
				<Route path='/admin' element={<Login />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default Service;