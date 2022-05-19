import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'
import { saveTimeoutId } from '../reducers/timeoutReducer'

const AnecdoteList = () => {
  	const dispatch = useDispatch()
	const anecdotes = useSelector(state => state.anecdotes)
	const currentTimeoutId = useSelector(state => state.timeout)
	
	const handleVote = id => {
		if (currentTimeoutId) {
			clearTimeout(currentTimeoutId)
		}
    	dispatch(vote(id))
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