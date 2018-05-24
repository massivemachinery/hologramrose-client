import * as React from 'react';
import * as PropTypes from 'prop-types';
import Button from 'material-ui/Button';

export default class SignIn extends React.Component<{
  url: string;
  onSignInCompleted: Function;
}> {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onSignInCompleted: PropTypes.func.isRequired,
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
  receiveMessage = (event: any) => {
    // Only trust messages from this origin
    if (event.origin !== window.env.API_SERVER) {
      return;
    }

    // Close the pop up
    if (event.data.signInToken) {
      localStorage.setItem('hologramrose:signInToken', event.data.signInToken);
      event.source.close();
      this.props.onSignInCompleted();
    }
  };

  componentDidMount() {
    window.addEventListener('message', this.receiveMessage, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.receiveMessage, false);
  }

  handleSignIn = () => {
    const url = this.props.url;
    const windowName = 'signIn';
    const width = 720;
    const height = 640;
    const left = (window.outerWidth - width) / 2;
    const top = (window.outerHeight - height) / 2;
    window.open(
      url,
      windowName,
      [
        `width=${width}`,
        `height=${height}`,
        `left=${left}`,
        `top=${top}`,
        // 'toolbar=0',
        // 'scrollbars=0',
        // 'status=0',
        // 'resizable=0',
        // 'location=0',
        // 'menuBar=0',
      ].join(','),
    );
  };

  render() {
    return (
      <Button variant="raised" onClick={this.handleSignIn} color="primary">
        Sign in
      </Button>
    );
  }
}
