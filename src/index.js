import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, Link, Router } from 'react-router-dom';
import { history } from './helpers/history'
// import  PrivateRoute from './components/privateRoute/privateRoute'

import Login from './components/loginPage/loginPage';
import Register from './components/registerPage/registerPage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
