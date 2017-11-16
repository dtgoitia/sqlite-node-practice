// Source: http://www.sqlitetutorial.net/sqlite-nodejs/connect/

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
 
const dbPath = path.resolve(__dirname, 'chinook.db');
// open database in memory
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

let sql = `SELECT DISTINCT Name name FROM playlists ORDER BY name`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log('rows:', rows);
})
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});