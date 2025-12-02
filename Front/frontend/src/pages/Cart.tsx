import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mb-2 flex justify-between">
            {item.name} x {item.quantity} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
      <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>
      <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Clear Cart</button>
    </div>
  );
};

export default Cart;
