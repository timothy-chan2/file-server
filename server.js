const fs = require('fs');
const net = require('net');

const conn = net.createConnection({ 
  host: 'localhost',
  port: 80
});
conn.setEncoding('UTF8'); // interpret data as text