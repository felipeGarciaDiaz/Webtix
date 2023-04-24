const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const crypto = require('crypto');
const mysql = require('mysql');

//Submit request for connection to local mySQL server for tickets management
const db = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '',
    database:   'dos-bros-it',
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
app.post('/login-request', (req, res, next) => {
    /*  You need to update the token in the front end to true to access tickets,
        But this is unsecure, make sure the password is hashed and sent securely
        make sure users cant find vulnerabilities in the login form.
    '


    */
    console.log('recieved login request', req.body.username, req.body.password);
    res.redirect('/tickets');
    next();
})

http.listen(PORT, ()=>{
    console.log('Server Started using port:', PORT);
});