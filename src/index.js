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
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSagas)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

store.dispatch({ type: 'LOAD_EVENTS' })
