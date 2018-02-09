var http = require("http");

var fs = require("fs");

var server = http.createServer(function(req, res){
    console.log("client request URL: ", req.url);
    if(req.url === "/car"){
        fs.readFile("./views/car.html","utf8", function(errors, contents){
            res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(contents);
        res.end();
        });
    }
    else if(req.url === "/cat"){
        fs.readFile("./views/cat.html","utf8", function(errors, contents){
            res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(contents);
        res.end();
        });
    }
    else if(req.url === "/car/new/"){
        fs.readFile("./views/newcar.html","utf8", function(errors, contents){
            res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(contents);
        res.end();
        });
    }
    else if(req.url === '/images/kitty.jpg'){
        fs.readFile('./images/kitty.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        });
      }
    else if(req.url === '/images/car.jpg'){
    fs.readFile('./images/car.jpg', function(errors, contents){
        res.writeHead(200, {'Content-type': 'image/jpg'});
        res.write(contents);
        res.end();
    });
    }

});

server.listen(3030);
console.log("Running in localhost at port 3030");