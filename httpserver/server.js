var express = require("express");
var cors = require("cors");
var port = 3000;

var app = express();
app.use(cors());
app.use(express.json());

app.get("/getuser/", function(req, res) {
    var requestData = req.body;
    res.set("Content-Type", "application/json");

    var name = requestData["name"];
    var data = {
        "username": "",
        "id": "",
        "phone": ""
    };

    if (name == "bob") {
        data["username"] = "boblovesicecream";
        data["id"] = "235645676543";
        data["phone"] = "4167654389";
    }
    res.write(JSON.stringify(data));
    res.send();
});

app.listen(port, function(){
    console.log("Server is listening on port " + port);
});