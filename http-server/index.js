
const http = require("http");
const fs = require("fs");
const t = require("minimist");
const ar=t(process.argv.slice(2))
let homeContent = "";
let projectContent = "";
let registContent="";
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
fs.readFile("registration.html", (err, registration) => {
    if (err) {
      throw err;
    }
    registContent = registration;
  });
  
  http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
        case "/registration":
            response.write(registContent);
            response.end();
            break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(ar.port);
      
