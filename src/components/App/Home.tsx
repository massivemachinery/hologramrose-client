import * as React from 'react';
import { compose, withProps } from 'recompose';
import Typography from '@material-ui/core/Typography';
import withCurrentUser from '../../hoc/withCurrentUser';
import SignIn from './SignIn';
import styled from 'styled-components';

const Root = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  text-align: center;
`;

export class Home extends React.Component<{
  refetchCurrentUser: Function;
  isLoading: boolean;
  email?: string;
}> {
  // The current user is null before sign in, so we need to refetch when sign in
  // has completed
  handleSignInCompleted = () => {
    this.props.refetchCurrentUser();
  };

  render() {
    return (
      <Root>
        <Inner>
          <Typography align="center" variant="h4">
            Hologram Rose
          </Typography>
          <br />
          {!this.props.email && !this.props.isLoading && (
            <SignIn
              url={`${process.env.REACT_APP_SERVER}/auth/github`}
              onSignInCompleted={this.handleSignInCompleted}
            />
          )}
          {!!this.props.email && !this.props.isLoading && (
            <Typography align="center">
              Signed in as {this.props.email}
            </Typography>
          )}
        </Inner>
      </Root>
    );
  }
}

export default compose(
  withCurrentUser,
  withProps((ownProps: any) => {
    return {
      email: ownProps.currentUser && ownProps.currentUser.email,
      isLoading: ownProps.isLoadingCurrentUser,
    };
  }),
)(Home);
