{
  "apps"[
    {
      name: "deploy-basic",

      script: "serve",

      interpreter: "none",

      args: "serve -s build -p 3000",
    }
  ];
}

var http = require("http");
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World\n");
});
server.listen(3001);
console.log("Server running at http://127.0.0.1:80/");
