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

  var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product int(4))";

  con.query(sql, function (err, result) {

    if (err) throw err;

    console.log("Table created");

  });

});

