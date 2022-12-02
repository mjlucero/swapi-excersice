export const getResourceUrlFromApiUrl = (apiUrl: string) => {
  const [_, resourceUrl] = apiUrl.split("/api");

  return resourceUrl.slice(0, -1);
};

export const removeUnderscore = (word: string) => {
  return word.replace("_", " ");
};
