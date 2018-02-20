import {graphql} from 'react-apollo';
import CurrentUserQuery from '../graphql/queries/CurrentUser';

export default graphql(CurrentUserQuery, {
  options: ownProps => {
    return {
      pollInterval: 10000,
      fetchPolicy: 'cache-and-network',
    };
  },
  props: ({data, ownProps}) => {
    if (data.error) {
      if (data.error.message === 'GraphQL error: Not authorized') {
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
