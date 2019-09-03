import { gql } from 'apollo-boost'

export const BANNER_DATA = gql`
  query($lang: String!) {
    banners(lang: $lang) {
      title
      pictures {
        id
        name
        url
      }
    }
  }
`
