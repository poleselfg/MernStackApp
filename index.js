const app = require("./app.js");

function main() {
  await app.listen(4000);
  console.log("server on port 4000")
}

main();
