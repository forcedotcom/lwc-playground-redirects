const fs = require("fs");
const path = require("path");

expect.extend({
  toBeValidJsonObject(str) {
    try {
      const json = JSON.parse(str);
      if (Object.prototype.toString.call(json).slice(8, -1) !== "Object") {
        return {
          message: () => `expected valid json object`,
          pass: false,
        };
      }
    } catch (e) {
      return {
        message: () => `expected valid json, the JSON supplied is invalid`,
        pass: false,
      };
    }
    return {
      message: () => `expected valid json`,
      pass: true,
    };
  },
});

test("redirects.json is valid JSON format", () => {
  const json = fs.readFileSync(path.join(__dirname, "redirects.json"));
  expect(json).toBeValidJsonObject();
});

test("redirects.json has array of redirects", () => {
  const json = fs.readFileSync(path.join(__dirname, "redirects.json"));
  const data = JSON.parse(json);
  expect(data.redirects.length > 0);
});
