const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
con.connect((err) => {
    if (err) {
        console.log("Erro in connection");
    }
})

module.exports = con;