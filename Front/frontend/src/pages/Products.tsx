import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

const Products = () => {
  const { data, loading, error } = useFetch<Product[]>("/api/products");
  const [selectedCategory, setSelectedCategory] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const categories = Array.from(new Set(data?.map((p) => p.category) || []));
  const filteredProducts = selectedCategory
    ? data?.filter((p) => p.category === selectedCategory)
    : data;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
