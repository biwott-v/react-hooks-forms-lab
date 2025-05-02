import { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  const itemsToDisplay = items.filter((item) => {
    // Category filter
    const categoryMatch = 
      selectedCategory === "All" || 
      item.category === selectedCategory;
    
    // Search filter
    const searchMatch = 
      item.name.toLowerCase().includes(search.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <Filter 
        search={search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;