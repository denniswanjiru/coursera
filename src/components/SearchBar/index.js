import React, { useContext } from 'react'
import { CountriesContext } from '../../contexts/countries';

import "./styles.scss";

export default function SearchBar() {
  const { searchQuery, setSearchQuery, getCountry } = useContext(CountriesContext)

  const handleChange = (e) => {
    const country = e.target.value;
    setSearchQuery(country.toUpperCase());
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    getCountry();
    setSearchQuery("");
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input value={searchQuery} onChange={handleChange} type="text" className="search-input" placeholder="Enter country code"/>
        <button className="search-button" type="submit" >Add Country</button>
      </form>
    </div>
  )
}
