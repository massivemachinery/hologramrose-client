import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'react-apollo';
import {withProps} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import withCurrentUser from '../../hoc/withCurrentUser';
import SignIn from './SignIn';

const styles = {
  root: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    textAlign: 'center',
  },
};

export class Home extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    email: PropTypes.string,
    refetchCurrentUser: PropTypes.func.isRequired,
  }

  static defaultProps = {
    email: null,
  }

  // The current user is null before sign in, so we need to refetch when sign in has completed
  handleSignInCompleted = () => {
    this.props.refetchCurrentUser();
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.inner}>
          <Typography align="center" type="display1">
            Hologram Rose
          </Typography>
          <br />
          {! this.props.email &&
            <SignIn url="/auth/github" onSignInCompleted={this.handleSignInCompleted} />
          }
          {!! this.props.email &&
            <Typography align="center">
              Signed in as {this.props.email}
            </Typography>
          }
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withCurrentUser,
  withProps((ownProps) => {
    return {
      email: ownProps.currentUser && ownProps.currentUser.email,
    };
  }),
)(Home);
