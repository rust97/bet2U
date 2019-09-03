import { gql } from 'apollo-boost'

export const FAQ_DATA = gql`
  query($lang: String!, $section: String!) {
    content(lang: $lang, section: $section) {
      content
      title
    }
  }
`
