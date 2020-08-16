import React from 'react'
import ReactDOM from 'react-dom'
import AppContextProvider from './providers/AppContextProvider'
import AppThemeProvider from './providers/AppThemeProvider'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
