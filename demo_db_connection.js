var mysql = require('mysql2');



var con = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "qwerty"

});



con.connect(function(err) {

  if (err) throw err;

  console.log("Connected!");

sql = "SELECT 1 FROM dual";

  con.query(sql, function (err, result) {

    if (err) throw err;

    console.log("Result: " + result);

  });

});
