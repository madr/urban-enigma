import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootSagas from './sagas'
import rootReducer from './reducers'

// Assets imported here, for Parcel to recognize Sass files.
import '../sass/main.scss'

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSagas)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

store.dispatch({ type: 'LOAD_EVENTS' })
