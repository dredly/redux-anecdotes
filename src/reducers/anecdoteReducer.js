import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const  id  = action.payload
      const anecdoteToUpdate = state.find(a => a.id === id)
      const updatedAnecdote = {
        ...anecdoteToUpdate, 
        votes: anecdoteToUpdate.votes + 1
      }
      return state
        .map(a => a.id !== id ? a : updatedAnecdote)
        .sort((a, b) => b.votes - a.votes)
    },
    add(state, action) {
      const content  = action.payload
      return state.concat(asObject(content))
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { vote, add, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer