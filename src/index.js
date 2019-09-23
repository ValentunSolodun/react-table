import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Login from './components/loginPage/loginPage';
import Register from './components/registerPage/registerPage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
)

render(
  <Provider store={store}>
    {routing}
  </Provider>,
  document.getElementById('root')
)
