// establishes a connection with the game server
const { connect } = require("./client"); 

const { setupInput } = require("./input")


// Connect to the game server
console.log("Connecting ...");
const connection = connect();

// Set up user input with the connection object
const stdin = setupInput(connection);
