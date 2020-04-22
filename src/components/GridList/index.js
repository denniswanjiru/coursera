import React, { useContext } from 'react';

import "./styles.scss";
import { CountriesContext } from '../../contexts/countries';

export default function GridList() {
  const { loading,  listedCountries } = useContext(CountriesContext)

  if(loading) return <div className="loader">Loading...</div>

  return (
    <div className="grid">
      {listedCountries.map(({ code, name }) => (
        <div key={code} className="card">{name}</div>
      ))}
    </div>
  )
}
