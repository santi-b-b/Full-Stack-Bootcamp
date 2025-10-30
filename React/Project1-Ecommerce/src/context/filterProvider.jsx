import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState("All categories");
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <FilterContext.Provider value={{ category, setCategory,categories, setCategories, searchText, setSearchText }}>
      {children}
    </FilterContext.Provider>
  );
};

