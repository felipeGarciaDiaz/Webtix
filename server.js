const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const crypto = require('crypto');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
//Submit request for connection to local mySQL server for tickets management
const db = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '',
    database:   'webtix',
});
//Attempt connection to the mySQL server for tickets management and handling
db.connect((err) => {
    if(err) {
        console.log(err.code);
        console.log(err.fatal);
    }else{
        console.log("Connection has been succesfully initiated!")
    }
})
const PORT = 7072;

/*
app.use('/static', express.static(path.join(__dirname, '../client/build//static')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client/build/')});
});
*/

//Boilerplat express code, to setup the files on the frontend
app.use(express.static(path.join(__dirname, "client/build/")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/", "index.html"));
});

//Once a ticket is submitted, users are redirected to /repair
app.post('/repair', (req, res, next) => {   
    //Prepare and submit the form to the mySQL server, for security using ? as operators
    query = "INSERT INTO tickets (firstName, lastName, email, phone, description) VALUES (?)";
        const data = [
        req.body.firstName, 
        req.body.lastName,
        req.body.email, 
        req.body.phone, 
        req.body.request
    ]
    db.query(query, 
    //Handle the request, and error out or send to the server
    [data], (err, rows, fields) => {
        if (!err) { 
            console.log('Repair was succesfully sent to the servers database! \n Records: ' + fields);
        }else{
            console.log(err);
        }
    });
    //Log requests for dev build only
    console.log(req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.request);
    //Sends the form completed page to users, preferably we can loop back to the form in the future.
    res.sendFile(path.join(__dirname, "resp", "complete.html"), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('An error occurred while sending the file');
        } else {
          console.log('File sent successfully');
        }
      });
    //res.send("<h1>FORM SENT</h1>")

});

//Handle admin logon requests
app.post("/login-request", (req, res, next) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        const token = jwt.sign({ username }, "test");
        console.log('valid', req.body);
        res.status(200).json({ token: token });
    } else {
        console.log('invalid', req.body);
        return res.status(401).json({ message: "invalid credentials" });
    }
});
app.post('/tickets', (req, res, next) => {
    console.log('sending raw db data');
    query = "SELECT * FROM tickets";
    db.query(query, (err, rows, fields) => {
        if(!err) {
            console.log(rows, fields);
            res.send(rows);
        }else{
            console.error(err);
        }
    });
});

http.listen(PORT, ()=>{
    console.log('Server Started using port:', PORT);
});



/*


const authToken = (req, res, next) => {
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