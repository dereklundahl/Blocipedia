const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

    describe("GET /", () => {
        it("should return status code 200 and have 'Welcome to Blocipedia' in the body of the response", (done) => {
            request.get(base, (err, res, body) => {
                console.log(`THIS IS THE RES: ${res}`);
                expect(res.statusCode).toBe(200);
                expect(body).toContain("Welcome to Blocipedia");
                done();
            });
        });

    });
});