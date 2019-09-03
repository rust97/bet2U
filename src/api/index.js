import { ApolloClient } from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://bet2u.eu/affiliate_help/api/',
})

export const client = new ApolloClient({
  link,
  cache,
})
