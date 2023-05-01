import React from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import Services from "./Services";
import "./media/style.css";
import { Grid, Typography } from "@mui/material";
import {
	AttachMoney,
	ReceiptLong,
	AppShortcut,
	Save,
	Coronavirus,
	Speed,
} from "@mui/icons-material";

//HOME PAGE: this is where the users will submit there ticket requests.
function Home(props) {
	//fast load, and add service icons and messages for the users to know what you offer as a service
	const serviceList = [
		{
			description: "We offer exceptionally cheap services as low as $50 per repair!",
			icon: <AttachMoney fontSize='large' />,
		},
		{
			description: "Not sure whats wrong? We offer 100% free consultations!",
			icon: <ReceiptLong fontSize='large' />,
		},
		{
			description:
				"We're happy to download and setup your device with the software and programs you need for your classes!",
			icon: <AppShortcut fontSize='large' />,
		},
		{
			description:
				"Did your screen break? is your Hard-Drive no longer working? We can locate the parts for you, and fix it in house!",
			icon: <Save fontSize='large' />,
		},
		{
			description:
				"Is your computer infected with malware? We can fix that up, and get your computer running fast again!",
			icon: <Coronavirus fontSize='large' />,
		},
		{
			description:
				"Is your computer running slower then usual? Let us know and we can diagnose whats wrong, and get your computer back up to speed!",
			icon: <Speed fontSize='large' />,
		},
	];
	return (
		<React.Fragment>
			<NavBar />
			{/* Main block, this is  where users will see the company name, and the form to send requests. */}
			<Grid container justifyContent='center' alignItems='center'>
				<Typography align='center'>
					<div id='content-block'>
						<h1 id='content-title' className='text-7xl text-center'>
							Dos Bros
						</h1>
						<p id='content-desc' className='text-2xl text-center'>
							We are a new local IT repair business in the USF area, offering cheap
							repairs with convenient locations! If your in need of a repair, read
							about our services, then fill out the form below.
						</p>

						{/* See Form.jsx, this is the form where the users will submit there requests through */}
						<Form />
					</div>
				</Typography>
			</Grid>

			{/* Map the object array, with the services and display them */}
			<Grid container columnSpacing={10} justifyContent='center' alignItems='center'>
				<Grid />
				{serviceList.map((offeredServices) => (
					<Services
						serviceName={offeredServices.title}
						iconType={offeredServices.icon}
						serviceDesc={offeredServices.description}
					/>
				))}
				<Grid />
			</Grid>
			<div id='spacer'></div>
		</React.Fragment>
	);
}

export default Home;
