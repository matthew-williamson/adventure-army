export const makeRequest = async (url: string, options?: RequestInit) => {
  const response = await fetch(`http://localhost:3000${url}`, options);
  const { status } = response;
  if (status !== 200) {
    throw new Error("Failed to fetch"); // over simplification.
  }

  const data = await response.json(); // could abstract, not always JSON. Use content-type.
  return data;
};
