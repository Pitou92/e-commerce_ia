import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="relative">
      🛒
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
