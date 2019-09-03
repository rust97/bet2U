import { gql } from 'apollo-boost'

export const DATA = gql`
  mutation($name: String!, $review: String!) {
    addNewReview(newReview: { name: $name, review: $review }) {
      id
      name
      review
    }
  }
`

export const REVIEWS = gql`
  query {
    reviews {
      id
      name
      review
    }
  }
`
