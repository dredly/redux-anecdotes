import { useSelector, useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'
import { saveTimeoutId } from '../reducers/timeoutReducer'

const AnecdoteForm = () => {
  	const dispatch = useDispatch()
	const currentTimeoutId = useSelector(state => state.timeout)

	const addAnecdote = async evt => {
    	evt.preventDefault()
		if (currentTimeoutId) {
			clearTimeout(currentTimeoutId)
		}
    	const content = evt.target.anecdoteContent.value
    	evt.target.anecdoteContent.value = ''
    	dispatch(addNewAnecdote(content))
		dispatch(changeNotification(`You created '${content}'`))
		const timeoutId = setTimeout(() => {
			dispatch(changeNotification(''))
			dispatch(saveTimeoutId(NaN))
		}, 5000)
		dispatch(saveTimeoutId(timeoutId))
  	}

	return (
		<>
			<h2>create new</h2>
      		<form onSubmit={addAnecdote}>
        		<div>
          			<input name="anecdoteContent" />
        		</div>
        		<button>create</button>
      		</form>
		</>
	)
}

export default AnecdoteForm