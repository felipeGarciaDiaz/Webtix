// This file is used to send the raw database data to the client
// This file is executed when the client requests the ticket data
module.exports = function (socket, db, io) {
	socket.on('request-tickets', () => {
		console.log('sending raw db data using socket.io');

		let query = 'SELECT * FROM `tickets`';
		db.query(query, (err, rows, fields) => {
			if (!err) {
				io.emit('ticket-data', rows);
			} else {
				console.error(err);
			}
		});
	});
};
