import React from 'react';
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.notification === '') return null
  

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state)  => {
  //console.log(state)
  return {
    //anecdotes: state.anecdotes,
    notification: state.notification
  }
}

//export default Notification
const ConnectedVoting= connect(mapStateToProps)(Notification)
export default ConnectedVoting
