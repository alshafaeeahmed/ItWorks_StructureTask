export const getRecipesApi = async (): Promise<ecipe[]> => {
  const response = await axios.get<{data: Recipe[]}>(Path.GET_RECIPES);
  return response?.data?.data;
};
