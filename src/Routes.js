import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;