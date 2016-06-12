# Khoros Javascript Client

JS client for [Khoros](http://github.com/scottgarner/khoros).

## Usage

### Initialize

Initialize Khoros by passing a socket.io instance, the name of a room to sing to and the name of a room to listen to. You can also choose to only specify one of the rooms if you only need to broadcast or receive but not both.

`khoros.init(socket, "demo", "demo");`

### Sing

Broadcast to the room specified above by calling `sing` with the name of a song (which can be anything) and a Javascript object containing whatever data you like.

`khoros.sing("songName", {} );`

### Listen

Listen to a song by declaring a listener with the name of a song and a handler for the passe data.

`khoros.listen("songName", function(data) { console.log(data); });`