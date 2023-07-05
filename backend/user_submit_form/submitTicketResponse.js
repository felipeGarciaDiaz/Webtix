module.exports = function (socket, io) {
	socket.on('form-submit-request', (isFormSubmit) => {
		isFormSubmit = true;
		io.to(socket.id).emit('form-complete', isFormSubmit);
	});
};
