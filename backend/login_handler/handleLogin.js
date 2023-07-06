// Purpose: Handles login requests
// Notes: This is a very simple login handler, it is not secure and should not be used in production.

const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
	const { username, password } = req.body;
	if (username === 'admin' && password === 'password') {
		const token = jwt.sign({ username }, 'test');
		console.log('valid', req.body);
		res.status(200).json({ token: token });
	} else {
		console.log('invalid', req.body);
		return res.status(401).json({ message: 'invalid credentials' });
	}
};
