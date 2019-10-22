const chai = require("chai");
const chaiHTTP = require("chai-http");
const server = require("./server");
const { expect } = require("chai");
chai.use(chaiHTTP);

describe("basic tests", () => {
  it("should fetch proper data", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res.body.msg).to.equals("hello");
        done();
      });
  });
});
