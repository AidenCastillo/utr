const { UTR } = require("./class.js");
require("dotenv").config();

function main() {
  const Utr = new UTR(process.env.EMAIL, process.env.PASSWORD);
  Utr.login();
}

if (require.main === module) {
  main();
}
