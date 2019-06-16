import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
//import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {
    const addAnecdote = async (event) => {
      event.preventDefault()
      // const anecdote = event.target.anecdote.value
      // props.createAnecdote(anecdote)
      // event.target.anecdote.value = ''
      

      const anecdote = event.target.anecdote.value
      event.target.anecdote.value = ''
      //const newAnec = await anecdoteService.createNew(anecdote)
      props.createAnecdote(anecdote) 
      setNotification(anecdote)
      
    }

    const setNotification = (anecdote) => {
      props.setMessage('you created \'' + anecdote + '\'')
      setTimeout(() => {
        props.setMessage('')
      }, 5000)
    }
  
    return (
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    )
}

// const mapStateToProps = (state)  => {
//   //console.log(state)
//   return {
//     anecdotes: state.anecdotes
//   }
// }

// const mapDispatchToProps = {
//   createAnecdote,
//   setMessage
// }

//export default NewAnecdote
//const ConnectedAnecdote = connect(null, mapDispatchToProps)(NewAnecdote)
//export default ConnectedAnecdote

//export default connect(null, { createAnecdote, setMessage } )(NewAnecdote)

export default connect(
  null, { createAnecdote, setMessage }
)(NewAnecdote)