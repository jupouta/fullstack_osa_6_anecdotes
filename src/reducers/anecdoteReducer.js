import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
// state = initialState

const reducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const voteToAdd = state.find(a => a.id === id)
      const voteAdded = {
        ...voteToAdd,
        votes: voteToAdd.votes + 1
      }
      const returning = state.map(anecdote => anecdote.id !== id ? anecdote : voteAdded)
      const sortedState = returning.sort(function compare( a, b ) {
        if (a.votes > b.votes){
          return -1;
        }
        if (a.votes < b.votes){
          return 1;
        }
        return 0;
      })

      return sortedState
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      const anecdoteText = action.data
      const addedAnecdote = [...state, anecdoteText]
      return addedAnecdote
    default:
      return state
  }

}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

// export const initializeAnecdotes = (anecdotes) => {
//   return {
//     type: 'INIT_ANECDOTES',
//     data: anecdotes
//   }
// }

// export const createAnecdote = (data) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data
//   }
// }

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    dispatch({
      type: 'VOTE',
      data: { id }
    })

  }
}

// export const voteAnecdote = (id) => {
//   return {
//     type: 'VOTE',
//     data: { id }
//   }
// }

export default reducer