var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 8080;

app.get("/:operation/:first/:second", function (req, res) {
    debugger
    var operation = req.params.operation;
    var first = parseFloat(req.params.first);
    var second = parseFloat(req.params.second);

    switch (operation) {
        case "add":            
            // instead of to string, we can do " " + (a + b)
            res.send((first + second).toString()); // remember to convert to string before sending it back to front end !!!
            break;
    }
})

app.listen(port, function (e) {
    if (e) throw e;
    console.log("Server started @ " + port);
})