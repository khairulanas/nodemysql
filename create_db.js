const db = require('./db_config');

db.connect((err) => {
  if (err) throw err;

  let sql = "CREATE DATABASE mahasiswa";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('db mahasiswa created');
  })
});
