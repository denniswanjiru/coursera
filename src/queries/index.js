import gql from 'graphql-tag';

export const GET_COUNTRY = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
    }
  }
`;