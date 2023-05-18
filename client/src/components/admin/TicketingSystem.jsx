import React, { useState, useEffect} from "react";
import Ticket from "./Ticket";
//The ticketing system page, here the mySQL table will display a list of all active tickets to the admins and IT staff
function TicketingSystem(props) {
	const [ticketData, setData] = useState([]);
	useEffect(()=>{
		fetch('/db-data', {
		  })
		  	.then(res => res.json())
			.then((data) => {
				setData(data.rows);
				console.log(data)
			})
			.catch(err => console.error('this is an error, most likley due to an issue with sending the MySQL data over to the client\n' + err))

	},[]);
	return (
		<div>
			<h1>Hello World</h1>
			{ticketData.map(row => (
				<Ticket key={row.id} firstName={row.firstName} lastName={row.lastName} phone={row.phone} email={row.email} description={row.description}/>
			))}
		</div>
	);
}

export default TicketingSystem;




/*
{ticketData.map(row => (
				<div key={row.id}>
					<p>{row.firstName}</p>
					<p>{row.lastName}</p>

					<p>{row.phone}</p>
					<p>{row.email}</p>
					<p>{row.description}</p>
					<hr />
				</div>
			))}
*/