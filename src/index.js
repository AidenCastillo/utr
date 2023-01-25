import UTR from "./class.js";
import dotenv from "dotenv";

const utr = new UTR(process.env.email, process.env.password);

export {
  utr as default
}