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
