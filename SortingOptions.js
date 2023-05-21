import React from 'react';

const SortingOptions = ({ sortOrder, handleSortOrderChange }) => {
  const handleSortOrder = (event) => {
    handleSortOrderChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sortOrder">Sort Order:</label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortOrder}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortingOptions;
