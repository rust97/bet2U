import { gql } from 'apollo-boost'

export const COUNTRIES = gql`
  query {
    countries {
      title
      countries {
        id
        country
      }
    }
  }
`
