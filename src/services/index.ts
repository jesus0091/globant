const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }
  return data;
};

export const getProductById = async (id: string) => {
  const encodedId = encodeURIComponent(id);
  const response = await fetch(`${API_URL}/${encodedId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product.");
  }
  return data;
};
