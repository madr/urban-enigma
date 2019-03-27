import '../sass/main.scss'
import React from 'react'
// import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// import rootSagas from '/src/sagas'
import App from './components/App'

//const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  //applyMiddleware(sagaMiddleware)
)

//sagaMiddleware.run(rootSagas)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
