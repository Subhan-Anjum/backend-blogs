const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "bpgssh9xngcccvzqpahy-mysql.services.clever-cloud.com",
  user: "uemhxl20zz6fkwky",
  password: "QRA5S2Fp9X4YF9AVK4bH",
  database: "bpgssh9xngcccvzqpahy",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = {connection};
