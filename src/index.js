import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import './index.scss';
import App from './components/App';
import { CountriesContextProvider } from './contexts/countries';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/graphiql'
});

const client  = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CountriesContextProvider>
        <App />
      </CountriesContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
