export const gettingCards = async () => {
  const response = await fetch(
    "https://66f0921df2a8bce81be63552.mockapi.io/item"
  );
  const data = await response.json();
  return data;
};
export const getItems = async () => {
  const response = await fetch(
    `https://66f0921df2a8bce81be63552.mockapi.io/item/${id}`
  );
  const data = await response.json();
  return data;
};
