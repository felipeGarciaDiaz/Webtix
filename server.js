const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const crypto = require('crypto');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cors = require('cors');
//Submit request for connection to local mySQL server for tickets management
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'webtix',
});
//Attempt connection to the mySQL server for tickets management and handling
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

app.get('/api/db-data', (req, res, next) => {
	console.log('sending raw db data');
	query = 'SELECT * FROM `tickets`';
	db.query(query, (err, rows, fields) => {
		if (!err) {
			res.status(200).send({ rows });
		} else {
			console.error(err);
		}
	});
});

app.get('/api/submitted', (req, res, next) => {
	res.status(200).json({ isSubmitted: true });
	console.log('/api/submitted/ executed!');
});
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/', 'index.html'));
});
//Once a ticket is submitted, users are redirected to /repair

app.post('/repair', (req, res, next) => {
	//Prepare and submit the form to the mySQL server, for security using ? as operators

	//Regex for form validation
	let regexName = /^[A-Za-z\s\-']+$/u;
	let regexEmail = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/u;
	let regexPhone =
		/^(\+\d{1,3}\s?)?(\d{1,3}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/gm;
	let regExDescription = /^[\w\s.,?!@#$%^&*()-[\]{}:;"'<>\|]+$/u;

	id = crypto.randomBytes(8).toString('hex');
	query =
		'INSERT INTO tickets (id, firstName, lastName, email, phone, description) VALUES (?)';
	//If this breaks for some reason add req.body before all those variables that are defined.
	const data = [
		id,
		req.body.firstName,
		req.body.lastName,
		req.body.email,
		req.body.phone,
		req.body.request,
	];

	//Handle the request, and error out or send to the server

	db.query(query, [data], (err, rows, fields) => {
		if (!err) {
			console.log(
				'Repair was succesfully sent to the servers database! \n Records: ' +
					fields
			);
		} else {
			console.log(err);
		}
	});
	//Log requests for dev build only
	console.log(
		req.body.firstName,
		req.body.lastName,
		req.body.email,
		req.body.phone,
		req.body.request
	);
	//Sends the form completed page to users, preferably we can loop back to the form in the future.
	/*res.sendFile(path.join(__dirname, 'resp', 'complete.html'), (err) => {
		if (err) {
			console.error(err);
			res.status(500).send('An error occurred while sending the file');
		} else {
			console.log('File sent successfully');
		}
	});*/
});

const authenticatorJWT = (auth) => {
	console.log('auth tokens');
};
app.post('/login-request', (req, res, next) => {
	const { username, password } = req.body;
	if (username === 'admin' && password === 'password') {
		const token = jwt.sign({ username }, 'test');
		console.log('valid', req.body);
		res.status(200).json({ token: token });
	} else {
		console.log('invalid', req.body);
		return res.status(401).json({ message: 'invalid credentials' });
	}
});

http.listen(PORT, () => {
	console.log('Server Started using port:', PORT);
});

/*


const authToken = (req, res, next) => {
//Handle admin logon requests
const authenticatorJWT = (auth) => {
	console.log('auth tokens');
};
app.post('/login-request', (req, res, next) => {
	const { username, password } = req.body;
	if (username === 'admin' && password === 'password') {
		const token = jwt.sign({ username }, 'test');
		console.log('valid', req.body);
		res.status(200).json({ token: token });
	} else {
		console.log('invalid', req.body);
		return res.status(401).json({ message: 'invalid credentials' });
	}
});
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token === null) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) {
            return res.sendStatus(403);
        }
        req.user = user
        next();
    });
}





 if(req.body.username === "admin" && req.body.password === "password"){
        const token = jwt.sign({username}, 'test');
        res.cookie(token);
        res.redirect('/tickets')
    console.log('error');
   }
    next();
*/
