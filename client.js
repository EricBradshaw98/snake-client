const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Connected to game server");
  });
  //add initials
  conn.write("Name: ECB");


  conn.on("data", (data) => {
    // code to handle incoming data and log it
    console.log("Incoming data:", data);
    //conn.write("Move: up");


  });

  return conn;
};

module.exports = { connect };