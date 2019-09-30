import React from 'react'
import { connect } from 'react-redux'

function App({ task, taska, taskb }) {
  const handleClickAdd = value => e => {
    taska('taska')
  }
  const handleClickCut = value => e => {
    taskb('taskb')
  }

  const changeState = event => {
    //使用setState將值寫到nameVal中
    taska(event.target.value)
    console.log('改了改了')
  }

  return (
    <div>
      <header>
        <div className="container m-3">
          <input type="text" value={task} onChange={changeState} />
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

const mapState = state => ({
  task: state.task
})

const mapDispatch = dispatch => ({
  taska: dispatch.task.taska,
  taskb: dispatch.task.taskb
})

export default connect(
  mapState,
  mapDispatch
)(App)
