import gql from 'graphql-tag';

export default gql`
  query CurrentUser {
    viewer {
      id
      email
    }
  }
`;
