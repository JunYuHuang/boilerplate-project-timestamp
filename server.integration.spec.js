// doesn't work -- still experimenting with how to write working integration tests

const request = require("supertest");
const { app } = require("./server");

describe.skip("GET /api/", () => {
  it("responds with json representing the current time and date", () => {
    request(app, { http2: true })
      .get("/api/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.utc).toBeDefined();
        expect(res.body.unix).toBeDefined();
      });
  });
});
