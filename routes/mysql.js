let mysql = require("mysql");

let sqlOptions = {
  // host: "localhost",
  // port: "3306",
  // user: "root",
  // password: "JavaScriptGO@123456",
  // database: "mallPro",
  host: "db4free.net",
  port: "3306",
  user: "gcbeen",
  password: "JavaScriptGO@123456",
  database: "mall_pro",
  useConnectionPooling: true,
};

// 创建连接

let con = mysql.createConnection(sqlOptions);
con.connect((err) => {
  if (err) {
    console.log("错误信息：" + err);
  } else {
    console.log("数据库连接成功");
  }
});

function sqlQuery(strSql, arr) {
  return new Promise((resolve, reject) => {
    con.query(strSql, arr, (err, results) => {
      if (err) {
        reject("错误信息：" + err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = sqlQuery;
