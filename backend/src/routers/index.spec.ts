import request from "supertest";
import app from "../app";

jest.mock("axios");

describe("GET /api/image", () => {
  const URL = "/api/image";

  it("exists", async () => {
    const res = await request(app).get(URL);

    expect(res.statusCode).toBe(500);
  });
});
