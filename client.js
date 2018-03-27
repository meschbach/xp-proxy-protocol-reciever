const net = require('net');
const proxy_protocol = require('proxy-protocol-v2');

const header = proxy_protocol.v2_encode({
	remoteFamily: 'IPv4',
	remoteAddress: '12.34.56.78',
	remotePort: 1234,
	localAddress: '172.16.0.1',
	localPort: 8080,
	protocol: 'tcp'
});

const socket = new net.Socket()
socket.connect({host: "localhost", port: 5555}, (problem) =>{
	console.log("Problem", problem);
	socket.end(header)
})