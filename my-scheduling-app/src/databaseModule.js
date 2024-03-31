const fs = require('fs');
const path = require('path');

// Assuming the "database" file is named 'db.json' and is located in the same directory as this script
const dbFilePath = path.join(__dirname, 'db.json');

// Function to read the database file
function readDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile(dbFilePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
}

// Function to write to the database file
function writeDatabase(database) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(database, null, 2);
    fs.writeFile(dbFilePath, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

module.exports = { readDatabase, writeDatabase };
