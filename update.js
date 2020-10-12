const db = require('./db_config');

db.connect((err) => {
  if (err) throw err;

  let sql = `UPDATE mahasiswa SET alamat="isekai" WHERE npm="123";`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('update success' + result.affectedRows)
  })
})