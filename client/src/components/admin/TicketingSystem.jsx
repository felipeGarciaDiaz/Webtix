import React, { useState, useEffect} from "react";
//The ticketing system page, here the mySQL table will display a list of all active tickets to the admins and IT staff
function TicketingSystem(props) {
	const [data, setData] = useState([]);
	useEffect(()=>{
		fetch('/db-data', {
		  })
		  	.then(res => res.json())
			.then((data) => {
				
				setData(data);
				console.log(data);
			})
			.catch(err => console.error('this is an error, most likley due to an issue with sending the MySQL data over to the client\n' + err));

	});
	return (
		<div>
			{data.map(rows => (
				<h1 key={rows.id}>{rows.phone}</h1>
			))}

			<h1>{data}</h1>
		</div>
	);
}

export default TicketingSystem;
