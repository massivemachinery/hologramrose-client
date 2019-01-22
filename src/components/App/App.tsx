import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import apolloClient from '../../apollo';
import store from '../../redux';
import theme from '../../config/theme';
import Home from './Home';
import Test from './Test';

export default class App extends React.Component {
  theme = createMuiTheme(theme);

  // Apollo provider
  // https://www.apollographql.com/docs/react/basics/setup.html#creating-provider
  // Redux provider
  // http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store
  // Material-UI provider
  // https://material-ui-next.com/customization/themes/
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <MuiThemeProvider theme={this.theme}>
            <Router>
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/test" component={Test} />
              </Switch>
            </Router>
          </MuiThemeProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}
