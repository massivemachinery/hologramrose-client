import {graphql} from 'react-apollo';
import CurrentUserQuery from '../graphql/queries/CurrentUser';

export default graphql(CurrentUserQuery, {
  options: (ownProps) => {
    return {
      pollInterval: 10000,
      fetchPolicy: 'cache-and-network',
    };
  },
  props: ({data, ownProps}) => {
    return {
      isLoadingCurrentUser: data.loading,
      refetchCurrentUser: data.refetch,
      currentUser: data.currentUser,
    };
  },
});
