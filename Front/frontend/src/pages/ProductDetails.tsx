import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category?: string;
  imageUrl?: string;
  stock?: number;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, loading, error } = useFetch<Product>(`/api/products/${id}`);
  const { addToCart } = useCart();

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/3 h-64 object-cover rounded"
        />
      )}
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        {product.category && (
          <p className="text-sm text-gray-500 mb-1">Rareté : {product.category}</p>
        )}
        <p className="mb-2 font-bold">${product.price.toFixed(2)}</p>
        <p className="mb-2">{product.description}</p>
        {typeof product.stock === "number" && (
          <p className="mb-4 text-sm text-gray-600">
            Stock disponible : {product.stock}
          </p>
        )}
        <button
          onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
