module.exports = function (socket, db, crypto) {
	socket.on('complete-ticket', (log) => {
		console.log(
			'completed ticket request recieved! Processing MySQL query...'
		);
		let id = crypto.randomBytes(8).toString('hex');
		const data = [id, log];
		let query = 'INSERT INTO `data-share-logs` (id, log) VALUES (?)';
		db.query(query, [data], (err, rows, fields) => {
			if (!err) {
				console.log(
					'ticket completion request finalized and logged successfully!'
				);
			} else {
				console.error(err);
			}
		});
	});
};
