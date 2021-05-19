const chai = require("chai");
const expect = chai.expect;

describe("file to be tested", () => {
  it("should compare some values", () => {
    expect(1).to.equal(1);
  });
  it("should test some stuffs", () => {
    expect({ name: "foo" }).to.deep.equal({ name: "foo" });
    expect({ name: "foo" }).to.have.property("name").to.equal("foo");
    expect(5 > 8).to.be.false;
    expect({}).to.be.a("object");
    expect("foo").to.be.a("string");
    expect(3).to.be.a("number");
    expect("bar").to.be.a("string").with.lengthOf(3);
    expect(null).to.be.null;
    expect(undefined).to.not.exists;
    expect(1).to.exist;
  });
});
