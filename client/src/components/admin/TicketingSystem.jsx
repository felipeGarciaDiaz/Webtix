import React from "react";
//The ticketing system page, here the mySQL table will display a list of all active tickets to the admins and IT staff
function TicketingSystem(props) {
	return (
		<div>
			<h1>Hello World</h1>
			{/* TODO: 
				Display active tickets,
				Allow the manipulation of tickets through, radio buttons, called complete, pending, escalate, delete, and logging
					Complete: Ticket will be marked as finished
					Pending: Ticket will be highlighted as currently being worked on
					Escalate: Ticket will be marked for review by a senior member of the IT staff or Admin staff
					Delete: Incorrectly made tickets, should be given the option to be deleted in a proper way
					Logging: Most essential feature, IT can write notes on how they fixed the issue. This is a comptia standard!
						Logging, will be a huge feature in webttix allowing all companies using the service to view logs from other companies
						the logging, will automatically remove any protected information for the companies security. In the long run, this will
						create a massive database of IT solutions and answers to quickly expedite IT Ticket and Maitenance requests from users.
						
					*/}
		</div>
	);
}

export default TicketingSystem;
