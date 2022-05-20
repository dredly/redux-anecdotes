import { createSlice } from "@reduxjs/toolkit"

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
      return state.concat(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { vote, add, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer