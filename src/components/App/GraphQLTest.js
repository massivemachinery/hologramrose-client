import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'react-apollo';
import Typography from 'material-ui/Typography';
import CurrentUserQuery from '../../graphql/queries/CurrentUser';

export class GraphQLTest extends React.Component {
  static propTypes = {
    isLoadingCurrentUser: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    currentUser: null,
  };

  render() {
    if (this.props.isLoadingCurrentUser) {
      return <div>Loading...</div>;
    }

    return (
      <Typography align="center">
        Test query result: {this.props.currentUser.email}
      </Typography>
    );
  }
}

// Higher order component
export default graphql(CurrentUserQuery, {
  props: ({data, ownProps}) => {
    return {
      isLoadingCurrentUser: data.loading,
      currentUser: data.currentUser,
    };
  },
})(GraphQLTest);
