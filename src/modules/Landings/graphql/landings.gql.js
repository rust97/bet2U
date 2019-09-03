import { gql } from 'apollo-boost'

export const LANDINGS_DATA = gql`
  query($lang: String!, $first: Int!, $after: Int, $category: String!) {
    landings(lang: $lang, first: $first, after: $after, category: $category) {
      nextPage
      list {
        id
        title
        url
        domain
        landingPage
        link
      }
    }
  }
`
