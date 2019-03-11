

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "py_database"
});

con.connect(function (err) {
    if (err) throw err;

    console.log("Connected!")

    con.query("SELECT * FROM username", (err, result, fields) => {
        if(err) throw err
        console.log(result)
        console.log(fields)
        //field akan menampilkan seluruuh informasi mengenai table dan database
    })
    con.end()
});


