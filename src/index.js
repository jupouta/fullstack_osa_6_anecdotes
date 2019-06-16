import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, {initializeAnecdotes} from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   notification: notificationReducer
// })

// const store = createStore(reducer)

// anecdoteService.getAll().then(anecdotes =>
//   anecdotes.forEach(anecdote => {
//     store.dispatch(initializeAnecdotes(anecdotes))
//   })
// )

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// document.getElementById('root'))

//render()
//store.subscribe(render)