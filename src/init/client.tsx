// Core
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// GraphQL Server
export const link = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
