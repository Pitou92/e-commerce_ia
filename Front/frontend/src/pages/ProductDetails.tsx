import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, loading, error } = useFetch<Product>(`/api/products/${id}`);
  const { addToCart } = useCart();

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="mb-2">${product.price.toFixed(2)}</p>
      <p className="mb-4">{product.description}</p>
      <button
        onClick={() => addToCart({ ...product, quantity: 1 })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
