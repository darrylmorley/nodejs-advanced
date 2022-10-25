// In this instance the work is being passed to OS and is not being managed by libuv, therefore the OS decides how many threads / cores are used.
// Some std lib calls are handled by the OS's async features. OS Specific.
// Most of the network lib is handled by the OS.

const https = require("https");
const start = Date.now();

function doRequest() {
  https
    .request("https://www.google.co.uk", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
