import axios from "axios";
import { getRandomImage } from "./image";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("getRandomImage", () => {
  it("throws an error if an image wasn't fetched", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error());
    expect.assertions(1);

    try {
      await getRandomImage();
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it("returns an image on successful call", async () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0);
    mockedAxios.get.mockResolvedValueOnce({ data: "test" });

    const res = await getRandomImage();
    expect(res.image).toBeTruthy();
  });
});
