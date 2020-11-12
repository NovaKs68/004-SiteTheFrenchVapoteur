let mysql = require('mysql');


db  = mysql.createPool({
    connectionLimit : 10,
    host            : 'mariadb',
    port            : '3306',
    user            : 'tomSQL',
    password        : 'tom',
    database        : 'theFrenchVapoteur',
});


