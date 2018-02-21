import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER,
});

const authLink = setContext((request, previousContext) => {
  const token = localStorage.getItem('hologramrose:signInToken');

  return {
    headers: {
      ...previousContext.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Apollo GraphQL client
// https://www.apollographql.com/docs/react/basics/setup.html#creating-client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
