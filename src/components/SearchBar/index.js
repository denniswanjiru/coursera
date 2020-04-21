import React from 'react'

export default function SearchBar({ setSearchQuery, searchQuery, handleAddToList }) {
  const handleChange = (e) => {
    const country = e.target.value;
    setSearchQuery(country);
  }

  const handleSubmit =(e) => {
    // do something
    e.preventDefault();
    handleAddToList();
    setSearchQuery("");
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input value={searchQuery} onChange={handleChange} type="text" className="search-input" placeholder="Enter country Name"/>
        <button type="submit" >Add Country</button>
      </form>
    </div>
  )
}
