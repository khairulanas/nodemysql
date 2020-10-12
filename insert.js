const db = require('./db_config');

db.connect((err) => {
  if (err) throw err;

  let sql = `
    INSERT INTO mahasiswa (npm,nama,kelas,alamat) 
    VALUES ('124','kato','452231','sumenep')
  `;

  db.query(sql, (err) => {
    if (err) throw err;
    console.log('insert success')
  })
})