const db = require('./db_config');

db.connect((err) => {
  if (err) throw err;

  let sql = `
    CREATE TABLE mahasiswa(
      npm CHAR(8) NOT NULL,
      nama VARCHAR(255) NOT NULL,
      kelas CHAR(5) NOT NULL,
      alamat VARCHAR(255),
      PRiMARY KEY (npm)
    )
  `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('table created');
  })
})