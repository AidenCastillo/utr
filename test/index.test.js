import utr from "../src/index.js";
import { convertToScore } from "../src/index.js";

test("UTR class", () => {
  expect(utr).toBeDefined();
});
test("UTR class function", () => {
  expect(utr.login).toBeDefined();
  expect(utr.searchPlayer).toBeDefined();
  expect(utr.getPlayer).toBeDefined();
  expect(utr.getResults).toBeDefined();
    
});

test("convertToScore function", () => {
  expect(convertToScore).toBeDefined();
});
