const fileServer = (loc) => {
  const fs = require('fs');
  const net = require('net');
  
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 3000
  });
  conn.setEncoding('utf8'); // interpret data as text
  
  conn.on('connect',() => {
    console.log('Connected to the server.');
    fs.readFile(loc[0], 'utf8', (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(data);
      }
      conn.end();
    });
  });
};

const location = process.argv.slice(2);

fileServer(location);