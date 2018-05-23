import * as React from 'react';
import {compose, withProps} from 'recompose';
import IntercomTracker from 'react-intercom';
import withCurrentUser from '../../hoc/withCurrentUser';

interface IntercomUser {
  email: string;
  name: string;
  created_at: Date;
  user_id: string;
}

export class Intercom extends React.Component<{
  intercomUser?: IntercomUser;
}> {
  render() {
    if (!this.props.intercomUser) {
      return null;
    }

    return <IntercomTracker appID="dtk4r15f" {...this.props.intercomUser} />;
  }
}

export default compose(
  withCurrentUser,

  withProps((ownProps: any) => {
    if (ownProps.isLoadingCurrentUser) {
      return;
    }

    return {
      intercomUser: {
        email: ownProps.currentUser.email,
        // TODO:
        name: 'some name',
        // TODO:
        created_at: new Date('2018-01-01'),
        user_id: ownProps.currentUser.id,
      },
    };
  }),
)(Intercom);
