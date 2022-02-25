const fs = require('fs');
const net = require('net');

const conn = net.createConnection({ 
  host: 'localhost',
  port: 80
});
conn.setEncoding('UTF8'); // interpret data as text

conn.on('connect',function(){
  console.log('client is connected to server.');
  });
  
conn.on('data', function(message){ // this is how we receive
  console.log(`File says: ${message}`);
  });

conn.on('end', function(){
  console.log('Disconnected from the server.');
  }); 