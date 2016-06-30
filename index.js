module.exports = {
	socket: null,
	singRoom: null,
	listenRoom: null,
	init: function (socket, singRoom, listenRoom) {
		var scope = this;

		scope.socket = socket;
		scope.singRoom = singRoom;
		scope.listenRoom = listenRoom;

		if (listenRoom != null) {
			socket.emit("khoros.join", {khoros: {room: listenRoom}});
		}		
	},
	sing: function(song, data) {
		var scope = this;

		if (!data.khoros) data.khoros = {};
		data.khoros.room = scope.singRoom;
		scope.socket.emit("khoros." + song, data);
	},
	listen: function(song, callback) {
		var scope = this;

		scope.socket.on("khoros." + song, callback);
	}
}