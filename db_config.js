const mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mahasiswa'
});
module.exports = db;
// db.connect((err) => {
//   if (err) throw err;
//   console.log('db connected.')
// });


