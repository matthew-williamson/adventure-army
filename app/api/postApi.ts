import { Post } from "../types/types";
import { makeRequest } from "./apiHelpers";

const postApi = {
  getPosts: (): Promise<Post[]> => makeRequest("/my-feed-result.json"),
};

export default postApi;
