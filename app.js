import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { loadState, saveState } from './components/local-storage'

import * as reducers from './reducers'
import App from './components/App'

const reducer = combineReducers(Object.assign({}, reducers, {}))

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
)

const persistedState = loadState();

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
)


const store = createStore(reducer, enhancer)

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
      {/*<DevTools />*/}
    </div>
  </Provider>,
  document.getElementById('mount')
)
