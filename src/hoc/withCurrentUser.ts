import {graphql} from 'react-apollo';
import Query from '../graphql/queries/CurrentUser';

type TProps = any;
type TGraphQLVariables = any;
type TChildProps = any;

type User = {
  id: string;
  email: string;
};

type TData = {
  viewer: User;
};

export default graphql<TProps, TData, TGraphQLVariables, TChildProps>(Query, {
  options: ownProps => {
    return {
      pollInterval: 10000,
      fetchPolicy: 'cache-and-network',
    };
  },
  props: ({data, ownProps}) => {
    if (!data) {
      return;
    }
    if (data.error) {
      if (data.error.message === 'GraphQL error: Not authorized') {
        // tslint:disable-next-line
        console.log('Not logged in');
      }
    }
    return {
      isLoadingCurrentUser: data.loading,
      refetchCurrentUser: data.refetch,
      currentUser: data.viewer,
    };
  },
});
