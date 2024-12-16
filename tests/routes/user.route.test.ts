//api/v1/users

import request from "supertest";
import app from "../../src/app"
import { describe, expect, it, vi } from "vitest";

vi.mock("../../src/models/user.model", () => {
    return {
        UserModel: {
            getAllUsers: vi.fn(async () => [])
        }
    }
})

describe("test express", () => {
    it("GET should return a 200 code", async () => {
        const {statusCode, body} = await request(app).get("/api/v1/users");

        console.log(body)
        expect(statusCode).toBe(200);
    });
})