import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'
//import anecdoteService from '../services/anecdotes'

const AnecdoteVoting = (props) => {

    const id = props.id
    //const store = props.store
    //anecdoteService.vote(id)
    const anecdote = props.anecdotes.find(a => a.id === id)
    
    console.log('vote', id)

    const setNotification = () => {
        props.setMessage('you voted \'' + anecdote.content + '\'')
        setTimeout(() => {
            props.setMessage('')
      }, 5000)
    }

    
    return (
        <button onClick={() => {
            props.voteAnecdote(id)
            setNotification()
        }}>vote</button>
    )
}

const mapStateToProps = (state)  => {
    return {
      anecdotes: state.anecdotes
    }
  }

const mapDispatchToProps = {
    voteAnecdote,
    setMessage
  }

//export default AnecdoteVoting
//const ConnectedVoting = connect(mapStateToProps, mapDispatchToProps)(AnecdoteVoting)
//export default ConnectedVoting

export default connect(
  mapStateToProps, { voteAnecdote, setMessage }
)(AnecdoteVoting)