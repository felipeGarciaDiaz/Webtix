const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const crypto = require('crypto');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const submitTicket = require('./backend/user_submit_form/submitTicket');
const handleLogin = require('./backend/login_handler/handleLogin');
const submitTicketsIO = require('./backend/user_submit_form/submitTicketResponse');
const uploadTickets = require('./backend/tickets_management/uploadTickets');
const completeTicket = require('./backend/tickets_management/completeTicket');

const cors = require('cors');
//Submit request for connection to local mySQL server for tickets management
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'webtix',
});

db.connect((err) => {
	if (err) {
		console.log(err.code);
		console.log(err.fatal);
	} else {
		console.log('Connection has been succesfully initiated!');
	}
});

const PORT = 7072;

//Boilerplat express code, to setup the files on the frontend
app.use(express.static(path.join(__dirname, 'client/build/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/submitted', (req, res, next) => {
	res.status(200).json({ isSubmitted: true });
	console.log('/api/submitted/ executed!');
});
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/', 'index.html'));
});
//Once a ticket is submitted, users are redirected to /repair

app.post('/repair', (req, res, next) => {
	submitTicket(req, res, db, crypto);
});

const authenticatorJWT = (auth) => {
	console.log('auth tokens');
};
app.post('/login-request', handleLogin);

io.on('connection', (socket) => {
	console.log('user connected via socket.io');

	submitTicketsIO(socket, io);

	uploadTickets(socket, db, io);

	completeTicket(socket, db, crypto);
});
http.listen(PORT, () => {
	console.log('Server Started using port:', PORT);
});
