


const EDIT_TASK = 'EDIT_TASK'
const EDIT_TASK2 = 'EDIT_TASK2'

//action
function addTask(task) {
  return {
    type: EDIT_TASK,
    index: 1,
    task
  }
}

function addTask2(task) {
  return {
    type: EDIT_TASK2,
    index: 1,
    task
  }
}


export default {addTask, addTask2}


// let store = createStore(
//   todoApp,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// console.log(store.getState())
// let listener = store.subscribe(() => console.log(store.getState()))



