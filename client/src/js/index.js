import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import AppContainer from './app/AppContainer';
import GameContainer from './app/game/GameContainer';
import MenuContainer from './app/menu/MenuContainer';
import SignupContainer from './app/signup/SignupContainer';
import LoginContainer from './app/login/LoginContainer';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import appReducer from './app/appReducer';

let store = createStore(appReducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={MenuContainer}/>
          <Route path="game" component={GameContainer}/>
          <Route path="signup" component={SignupContainer}/>
          <Route path="login" component={LoginContainer}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

