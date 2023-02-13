import React from 'react'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'


const AppForSuspense = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

export default AppForSuspense