// This code is responsible for logging the completion of a ticket to the database.
// This code is executed when a user completes a ticket, and the ticket is logged to the database.

module.exports = function (socket, db, crypto) {
	socket.on('complete-ticket', (ticketData) => {
		console.log(
			'completed ticket request recieved! Processing MySQL query...'
		);
		let id = crypto.randomBytes(8).toString('hex');
		const data = [id, ticketData.log];
		let insertQuery = 'INSERT INTO `data-share-logs` (id, log) VALUES (?)';
		db.query(insertQuery, [data], (err, rows, fields) => {
			if (!err) {
				console.log(
					'ticket completion request finalized and logged successfully!'
				);
			} else {
				console.error(err);
			}
		});
		let deleteQuery = 'DELETE FROM `tickets` WHERE id = ?;';
		db.query(deleteQuery, [ticketData.ticketID], (err, rows, fields) => {
			if (!err) {
				console.log(
					'ticket fromt `tickets` table deleted successfully!'
				);
			} else {
				console.error(err);
			}
		});
	});
};
