 var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users VALUES ?";
var NULL;
  var values = [
    [1,'John', 154],
[2,'Peter', 154],
[3,'Amy', 154],
[4,'Hannah',NULL],
[5,'Michael',NULL]

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
