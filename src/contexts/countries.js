import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { GET_COUNTRY } from "../queries";

export const intialCountriesPayload = {
  laoding: false,
  searchQuery: "",
  listedCountries: [],
  getCountry: () => {},
  setSearchQuery: () => {},
};

export const CountriesContext = React.createContext(intialCountriesPayload);

export const CountriesContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listedCountries, setListedCountries] = useState([]);

  const { refetch } = useQuery(GET_COUNTRY, {
    variables: {
      filter: {
        code: {
          eq: searchQuery
        }
      }
    },
    skip: true,
  });

  const getCountry = async query => {
    if (searchQuery) {
      setLoading(true);
      const { loading, error, data } = await refetch();

      if (!loading && data.countries.length === 0) {
        setLoading(false);
        window.alert("Country code does exist");
      }

      if (!loading && !error && data.countries.length > 0) {
        setListedCountries([...listedCountries, data.countries[0]])
        setLoading(false);
      }
    }
  }

  return (
    <CountriesContext.Provider
      value={{
        ...intialCountriesPayload,
        loading,
        getCountry,
        searchQuery,
        setSearchQuery,
        listedCountries
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
