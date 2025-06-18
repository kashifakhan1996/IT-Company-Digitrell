var mysql = require('mysql2'); 
var con = mysql.createPool({ 
    connectionLimit: 10,  
    host: dbHost,
    user: dbUser, 
    password: dbPassword, 
    database: dbName, 
    waitForConnections: true,
    debug    :  false,   
    queueLimit: 30,
    connectTimeout:40000,
    multipleStatements: true
  });  
/* Live panel details
var con = mysql.createPool({ 
    connectionLimit: 10,  
    host: '103.212.121.75',
    user: 'hdjxasfo_root',
    password: 'Workingwomen@123',
    database: 'hdjxasfo_construction_app_admin',
    waitForConnections: true,
    debug    :  false,   
    queueLimit: 30,
    connectTimeout:40000,
    multipleStatements: true
  });  */

con.on('connection', function (connection) {
  if (err) throw err;
  console.log("Connected!");
  con.on("query","CREATE DATABASE construction_app_admin", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
