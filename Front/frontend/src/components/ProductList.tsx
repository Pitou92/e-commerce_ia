import { useFetch } from "../hooks/useFetch";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
}

const ProductList = () => {
  const { data, loading, error } = useFetch<Product[]>("/api/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
