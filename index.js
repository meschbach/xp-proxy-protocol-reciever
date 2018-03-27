const net = require('net');
const proxy_protocol = require('proxy-protocol-v2');

const server = net.createServer( (connection) => {
	console.log("New connection", connection.remoteAddress, connection.remotePort)
	connection.on('data', (buffer) => {
		let info = proxy_protocol.v2_decode(buffer);
		console.log(buffer.length, info)
	})
	// connection.resume();
});

server.listen(5555, (err) =>{
	console.log("Listening", err)
});
