import { User } from "../types/types";
import { makeRequest } from "./apiHelpers";

const userApi = {
  getMe: (): Promise<User> => makeRequest("/me-result.json"),
  getUser: async (userId: string): Promise<User | undefined> => {
    // This would not be shaped like this normally. We would be pinging the endpoint with the user ID.
    // Not getting all users then filtering them here, makes no sense.
    const users: User[] = await makeRequest("/users-result.json");
    const user = users.find((user) => user.id === Number(userId));
    return user;
  },
};

export default userApi;
