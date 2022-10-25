// Set Thread Pool size.
process.env.UV_THREADPOOL_SIZE = 6;

// Demonstrate that NodeJs isn't always single threaded
const crypto = require("crypto");

const start = Date.now();

// The libuc thread pool has 4 threads.
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});

// Thes final 2 have to wait for the first 4 complete.
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("6:", Date.now() - start);
});
