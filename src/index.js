import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import App from './App'
// import * as models from './models'

const count = {
	state: 0,
	reducers: {
		increment: s => s + 1,
	},
	effects: dispatch => ({
		async asyncIncrement() {
			await new Promise(resolve => {
				setTimeout(resolve, 1000)
			})
			dispatch.count.increment()
		},
	}),
}

const store = init({
  models:{
      count
  }
})

// Use react-redux's <Provider /> and pass it the store.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
