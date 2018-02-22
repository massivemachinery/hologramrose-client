import * as React from 'react';
import {Link} from 'react-router-dom';

export default class Test extends React.Component {
  render() {
    return (
      <div>
        Test - <Link to="/">Home</Link>
      </div>
    );
  }
}
