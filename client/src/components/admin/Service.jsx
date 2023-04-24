import React from "react";
import Home from "../Home";
import TicketingSystem from "./TicketingSystem";
import Login from "./Login";
import Protected from "./Protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
