interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selected, onChange }: CategoryFilterProps) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-bold">Filter by Category:</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="border p-1 rounded"
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
