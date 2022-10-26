import * as request from "supertest";
import { Express } from "express-serve-static-core";
import app from "../../app";

describe("GET /hello-world", () => {
    it("should return 200 & 'Hello, World!' message", async () => {
        const res = await request(app)
            .get(`/hello-world`)
            .expect("Content-Type", /json/)
            .expect(200);
        expect(res.body.message).toEqual("Hello, World!");
    });
});
