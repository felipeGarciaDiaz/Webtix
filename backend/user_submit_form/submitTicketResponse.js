// This file is used to send a response to the client that the form has been submitted.
// This file is executed when the client submits the form.
module.exports = function (socket, io) {
	socket.on('form-submit-request', (isFormSubmit) => {
		isFormSubmit = true;
		io.to(socket.id).emit('form-complete', isFormSubmit);
	});
};
