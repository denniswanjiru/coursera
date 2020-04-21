import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';

import './index.scss';
import App from './components/App';

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
      <ApolloConsumer>
        {
          client => <App client={client} />
        }
      </ApolloConsumer>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
