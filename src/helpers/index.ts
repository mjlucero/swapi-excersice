export const getResourceUrlFromApiUrl = (apiUrl: string) => {
  const [_, resourceUrl] = apiUrl.split("/api");

  return resourceUrl;
};
