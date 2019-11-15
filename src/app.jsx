import { hot } from 'react-hot-loader';
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from 'views/home';

// Routes
class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default hot(module)(App);
