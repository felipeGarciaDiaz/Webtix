module.exports = function (req, res, db, crypto) {
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
};
