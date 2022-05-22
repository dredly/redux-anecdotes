import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  	const dispatch = useDispatch()

	const addAnecdote = async evt => {
    	evt.preventDefault()
    	const content = evt.target.anecdoteContent.value
    	evt.target.anecdoteContent.value = ''
    	dispatch(addNewAnecdote(content))
		dispatch(setNotification(`You created - ${content}`, 5000))
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