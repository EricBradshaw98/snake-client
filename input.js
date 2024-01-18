let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input and movements
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  
  if (key === "e"){
  connection.write("Say: Seeya Chump");
}
if (key === "q"){
  connection.write("Say: Hello there");
}
};


// Set up user input with the connection object
const stdin = setupInput(handleUserInput);

module.exports = { setupInput };