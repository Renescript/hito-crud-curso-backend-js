//api/v1/users/:email

import request from "supertest";
import app from "../../src/app"
import { describe, expect, it, vi } from "vitest";

vi.mock("../../src/models/user.model", () => {
    return {
        UserModel: {
            getByEmail: vi.fn(async (email) => [])
        }
    }
})

vi.mock("../../src/middleware/jwt.middleware", () => {
    return {
        verifyToken: vi.fn((req,res,next) => {
            req.email = "mocked@example.com";
            req.uid = "mocked-uid";
            next();
        }),
    };
});

describe("/email", () => {
    it("GET should return a 200 code", async () => {
        const { statusCode, body } = await request(app).get("/api/v1/users/mocked@example.com");
        console.log(body)
        expect(statusCode).toBe(200);
    });
})