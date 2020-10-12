const db = require('./db_config');

db.connect((err) => {
  if (err) throw err;

  let sql = `DELETE FROM mahasiswa WHERE npm="1234";`;


  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('delete success :' + result.affectedRows)
  })
})