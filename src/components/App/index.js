import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

import "./styles.scss";
import SearchBar from '../SearchBar';
import GridList from '../GridList';
import { CountryFilterInput } from "../../types";

const GET_COUNTRY = gql`
  query Countries($filter) {
    countries(filter: $filter) {
      code
      name
    }
  }
`;

export default function App({ client }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listedCountries, setListedCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");



  useEffect(() => {
    setLoading(true);
    client
      .query({
        query: gql`
      query GetCountries {
        countries {
          name
          code
        }
      }
    `
      })
      .then(({ loading, data }) => {
        setLoading(loading);
        setCountries(data.countries);
      });
  }, [client]);

  const handleAddToList = () => {

    // setListedCountries([...listedCountries, country]);
  }

  useEffect(() => {
    console.log({ listedCountries });
  }, [listedCountries])


  return (
    <div className="page-wrapper">
      <SearchBar
        searchQuery={searchQuery}
        handleAddToList={handleAddToList}
        setSearchQuery={setSearchQuery}
      />
      <GridList countries={listedCountries} />
    </div>
  )
}
