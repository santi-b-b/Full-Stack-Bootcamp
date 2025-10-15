import { useFilters } from "../hooks/useFilter";

const Filter = () => {
  const { category, setCategory, categories = [], searchText, setSearchText } = useFilters();

  // Protege el map si categories aún no tiene datos
  const categoryOptions = categories.length ? categories : ["All categories"];

  return (
    <div className="flex   w-full gap-4 mb-6">
      <select
        value={category || "All categories"}
        onChange={e => setCategory(e.target.value === "All categories" ? "" : e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-1 text-sm md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 justify-start"
      >
        {categoryOptions.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="flex-1 flex justify-end items-end">     
        <input
          type="text"
          placeholder="Search product..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="border-b border-gray-200 px-3 py-1 text-sm md:w-64 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Filter;
