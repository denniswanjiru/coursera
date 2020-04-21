import React from 'react'

import "./styles.scss";
import GridList from '../GridList';
import SearchBar from '../SearchBar';

export default function App({ client }) {
  return (
    <div className="page-wrapper">
      <SearchBar />
      <GridList />
    </div>
  )
}
