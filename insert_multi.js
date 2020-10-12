const db = require('./db_config');

db.connect((err) => {
  if (err) throw err;

  let sql = "INSERT INTO mahasiswa (npm,nama,kelas,alamat) VALUES ?";
  var values = [
    ["1234", "megumi", "1a", "tokyo"],
    ["12345", "yui", "1b", "kyoto"],
    ["123456", "chizuru", "1c", "akihabara"],
    ["1234567", "mami", "1f", "trash"]
  ]

  db.query(sql, [values], (err) => {
    if (err) throw err;
    console.log('insert success')
  })
})