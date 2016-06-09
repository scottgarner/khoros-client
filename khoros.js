var khoros = {
	socket: null,
	singRoom: null,
	listenRoom: null,
	init: function (socket, singRoom, listenRoom) {

		khoros.socket = socket;
		khoros.singRoom = singRoom;
		khoros.listenRoom = listenRoom;

		if (listenRoom != null) {
			socket.emit("khoros.join", {khoros: {room: listenRoom}});
		}		
	},
	sing: function(song, data) {
		data.khoros = { room: khoros.singRoom };
		khoros.socket.emit("khoros." + song, data);
	},
	listen: function(song, callback) {
		khoros.socket.on("khoros." + song, callback);
	}
}