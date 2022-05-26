import mysql from "mysql";

var dbConnection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123123123",
  database: "todo",
});

dbConnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

export const execute = (query, params) => {
  try {
    return new Promise((resolve, reject) => {
      dbConnection.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  } catch (error) {
    console.error("[mysql.connector][execture][Error]", error);
    throw new Error("Failed to execture mySQL query");
  }
};


