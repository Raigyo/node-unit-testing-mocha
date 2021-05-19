const assert = require("assert");

describe("file to be tested", () => {
  context("function to be tested", () => {
    it("should do something", () => {
      assert.equal(1, 1);
      // console.log("ENV", process.env.NODE_ENV);
      if (process.env.NODE_ENV === "development") {
        console.log("DEVELOPMENT MODE");
      }
    });
  });
});
