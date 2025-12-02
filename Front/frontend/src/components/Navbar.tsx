import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">MyShop</Link>
      <div className="flex items-center space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <CartButton />
      </div>
    </nav>
  );
};

export default Navbar;
