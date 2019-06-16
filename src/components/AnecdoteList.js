import React from 'react'
import { connect } from 'react-redux'
import VoteAnecdote from './VoteAnecdote'

const AnecdotesListed = (props) => {
    //console.log(props)
    const anecdotes = props.anecdotes
    return (
         anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <VoteAnecdote id={anecdote.id}/>
              </div>
            </div>
          )
    )
}

const mapStateToProps = (state)  => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    //notification: state.notification
  }
}

//export default AnecdotesListed
const ConnectedAnecdotes = connect(mapStateToProps)(AnecdotesListed)
export default ConnectedAnecdotes