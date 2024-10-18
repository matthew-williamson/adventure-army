import { env } from "process";

export const makeRequest = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${env.APP_URL}/${url}`, options);
  const { status } = response;
  if (status !== 200) {
    throw new Error("Failed to fetch"); // over simplification.
  }

  const data = await response.json(); // could abstract, not always JSON. Use content-type.
  return data;
};
