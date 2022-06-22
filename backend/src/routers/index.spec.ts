import request from "supertest";
import app from "../app";

describe("GET /api/image", () => {
  const URL = "/api/image";

  it("exists", async () => {
    const res = await request(app).get(URL);

    expect(res.statusCode).toBe(200);
  });
});

describe("POST /api/image", () => {
  const URL = "/api/image";

  it("exists", async () => {
    const res = await request(app).post(URL);

    expect(res.statusCode).toBe(200);
  });
});
