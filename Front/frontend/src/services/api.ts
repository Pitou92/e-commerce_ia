const API_BASE = '/api/cards';

export const fetchProducts = async () => {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
};
