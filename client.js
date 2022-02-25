const fs = require('fs');
const net = require('net');

const conn = net.createConnection({ 
  host: 'localhost',
  port: 3000
});
conn.setEncoding('utf8'); // interpret data as text

conn.on('connect',function(){
  console.log('Connected to the server.');
  fs.readFile('./data.txt', 'utf8', function(err, data){
    if (err) {
      console.log(err.message);
    } else {
      console.log(data);
    }
    conn.end();
  });
});