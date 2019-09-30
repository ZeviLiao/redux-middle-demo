import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from './actions'

function App(props) {

  const handleClickAdd = value => e => {
    props.todosActions.addTask('Test1')
  }
  const handleClickCut = value => e => {
    props.todosActions.addTask2('Test2')
  }

  const changeState = event => {
    //使用setState將值寫到nameVal中
    props.todosActions.addTask(event.target.value)
    console.log('改了改了')
  }

  return (
    <div>
      <header>
        <div className="container m-3">
          <input type="text" value={props.filter} onChange={changeState} />
          {/* <input type="text" defaultValue={props.filter} /> */}

          <input
            className="btn btn-primary"
            onClick={handleClickAdd('a')}
            type="button"
            value="aa"
          />
          <input
            className="btn btn-primary"
            onClick={handleClickCut('b')}
            type="button"
            value="bb"
          />
        </div>
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
    filter2: state.filter2
  }
}

const mapDispatchToProps = dispatch => {
  return {
    todosActions: bindActionCreators(actions, dispatch)
  }
}

const TodoAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default TodoAppContainer
