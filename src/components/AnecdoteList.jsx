import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeAnecdotes, voteOnAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'
import { saveTimeoutId } from '../reducers/timeoutReducer'

const AnecdoteList = () => {
  	const dispatch = useDispatch()
	useEffect(() => {
    	dispatch(initializeAnecdotes())
  	}, [dispatch])
	const currentFilter = useSelector(state => state.filter)
	const anecdotes = useSelector(state => state.anecdotes)
		.filter(a => a.content.toLowerCase().includes(currentFilter.toLowerCase()))
	const currentTimeoutId = useSelector(state => state.timeout)
	
	const handleVote = id => {
		if (currentTimeoutId) {
			clearTimeout(currentTimeoutId)
		}
    	dispatch(voteOnAnecdote(id))
		const content = anecdotes.find(a => a.id === id).content
		dispatch(changeNotification(`You voted '${content}'`))
		const timeoutId = setTimeout(() => {
			dispatch(changeNotification(''))
			dispatch(saveTimeoutId(NaN))
		}, 5000)
		dispatch(saveTimeoutId(timeoutId))
  	}

	return (
		<>
			{anecdotes.map(anecdote =>
        		<div key={anecdote.id}>
          			<div>
            			{anecdote.content}
          			</div>
          			<div>
            			has {anecdote.votes}
            			<button onClick={() => handleVote(anecdote.id)}>vote</button>
          			</div>
        		</div>
      		)}
		</>
	)
}

export default AnecdoteList