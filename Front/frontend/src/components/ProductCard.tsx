import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category?: string;
  imageUrl?: string;
}

const ProductCard = ({ id, name, price, category, imageUrl }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow flex flex-col gap-2">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-40 object-cover rounded"
        />
      )}
      <h3 className="font-semibold">{name}</h3>
      {category && <p className="text-sm text-gray-500">Rareté : {category}</p>}
      <p className="font-bold">${price.toFixed(2)}</p>
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
