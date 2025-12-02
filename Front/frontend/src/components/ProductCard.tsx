import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
}

const ProductCard = ({ id, name, price }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow">
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart({ id, name, price, quantity: 1 })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
