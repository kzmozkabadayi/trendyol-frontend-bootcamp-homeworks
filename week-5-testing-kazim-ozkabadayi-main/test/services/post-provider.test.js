import { PostProvider } from "../../src/services/post-provider";
import axios from "axios";
import { jest } from "@jest/globals";

jest.mock("axios");
describe("PostProvider", () => {
  it("should return posts", async () => {
    const postProvider = new PostProvider();

    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: [
            {
                userId: 1,
                id: 1,
                title: "title",
                body: "body"
              },
        ]
      });
    });
    
    expect(await postProvider.getPosts()).toEqual([
        {
            userId: 1,
            id: 1,
            title: "title",
            body: "body"
          },
    ]);
  });

  it("should return error when get products throw error", async () => {
    const postProvider = new PostProvider();
    axios.get.mockImplementation(() => {
      return Promise.reject("network error");
    });
    expect(await postProvider.getPosts()).toBe("network error");
  });
});
