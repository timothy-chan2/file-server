const fs = require('fs');
const net = require('net');

const conn = net.createConnection({ 
  host: 'localhost',
  port: 3000
});
conn.setEncoding('utf8'); // interpret data as text

// conn.on('connect',function(){
//   console.log('Connected to the server.');
//   fs.readFile('/data', 'utf8', function(err, data){
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });
// });
  
// // conn.on('data', function(message){ // this is how we receive
// //   console.log(`File says: ${message}`);
// //   });

// conn.on('end', function(){
//   console.log('Disconnected from the server.');
//   }); 