import {  combineReducers } from 'redux'

//reducer
function filter(state = '', action) {
  switch (action.type) {
    case 'EDIT_TASK':
      return action.task
    default:
      return state
  }
}

function filter2(state = '', action) {
  switch (action.type) {
    case 'EDIT_TASK2':
      return action.task
    default:
      return state
  }
}

const todoApp = combineReducers({
  filter,
  filter2
})

export default todoApp;