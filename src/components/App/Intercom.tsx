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

    console.log('Ping Intercom ->', this.props.intercomUser);

    return (
      <IntercomTracker
        appID={window.env.INTERCOM_APP_ID}
        {...this.props.intercomUser}
      />
    );
  }
}

export default compose(
  withCurrentUser,

  withProps((ownProps: any) => {
    const {currentUser} = ownProps;

    if (!currentUser) {
      return;
    }

    return {
      intercomUser: {
        user_id: currentUser.id,
        user_hash: currentUser.intercomUserHash,
        email: currentUser.email,
        // TODO:
        name: 'some name',
        // TODO:
        created_at: new Date('2018-01-01'),
      },
    };
  }),
)(Intercom);
