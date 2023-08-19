  const http = require("http");
const fs = require("fs");
const args=process.argv.slice(2);
const portArg=args.findIndex(arg=> arg==='--port');
const port=portArg!==-1 ? parseInt(args[portArg+1],10):3000;
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
    response.writeHeader(200, { "Content-Type": "text/html" });
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
  .listen(port);
      
