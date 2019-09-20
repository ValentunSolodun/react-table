import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// store.dispatch({
//   type: 'ADD_ROW',
//   text: 'Use Redux'
// })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
