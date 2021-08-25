import { PostService } from "../../src/services/post-service";
import { PostProvider } from "../../src/services/post-provider";

jest.mock("../../src/services/post-provider");

describe("PostService", () => {
  describe("findMostFrequentPostingUserTitle function", () => {
    const postProvider = new PostProvider();
    const postService = new PostService(postProvider);

    it("should return most frequent posting user titles", async () => {
      postProvider.getPosts.mockImplementation(() => {
        return Promise.resolve([
          {
            userId: 1,
            id: 1,
            title: "user 1 title 1",
            body: "body 1",
          },
          {
            userId: 1,
            id: 2,
            title: "user 1 title 2",
            body: "body 2",
          },
          {
            userId: 2,
            id: 3,
            title: "user 2 title 1",
            body: "body 3",
          },
        ]);
      });

      expect(await postService.findMostFrequentPostingUserTitle()).toEqual([
        "user 1 title 1",
        "user 1 title 2",
      ]);
    });

    it("should return empty array", async () => {
      postProvider.getPosts.mockImplementation(() => {
        return Promise.resolve([]);
      });
      expect(await postService.findMostFrequentPostingUserTitle()).toEqual([]);
    });
  });
});
