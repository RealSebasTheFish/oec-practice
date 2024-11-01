/*
--- SETUP ---
1. Create a directory for your node server
2. cd into that folder
3. Create an app.js in that directory
4. Run the command 'npm init' (make sure you are in the directory with your app.js)
5. Run your 'npm install [package-name]' commands for all library imports respectively
6. After you are done your server code, run it with 'node [file-name]'

Note: You can totally have other files besides your app.js in your working npm directory ('index.html', 'main.css', etc.), 
but just make sure you run 'npm init' in the directory with your app.js file, or else you will not be able to run it

Good luck!
*/

// Defining basic libraries we need
var express = require("express");
var cors = require("cors");
var fs = require("fs");

// Port we will open to
var port = 3000;

// Initializes and sets up cors for our express server
var app = express();
app.use(cors())

// Default '/' directory definition
app.get("/", function (req, res) {
    // Define our content type to html
    res.set("Content-Type", "text/html");

    // Try to read file and send file contents as response, if failed, write error instead
    try {
        var file = fs.readFileSync("index.html");
        res.write(file);
    } catch (e) {
        res.write(e);
    }

    res.send();
});

// Default '/css' directory definition
app.get("/css", function (req, res) {
    // Define our content type to css
    res.set("Content-Type", "text/css");

    // Try to read file and send file contents as response, if failed, write error instead
    try {
        var file = fs.readFileSync("main.css");
        res.write(file);
    } catch (e) {
        res.write(e);
    }

    // Send the response
    res.send();
});

// Start the server on our specified port
app.listen(port, function(){
    // Print out message if server initialization was successful
    console.log("Listening on port " + port);
});