import { useDispatch } from 'react-redux'
import { add } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  	const dispatch = useDispatch()

	const addAnecdote = evt => {
    	evt.preventDefault()
    	const content = evt.target.anecdoteContent.value
    	evt.target.anecdoteContent.value = ''
    	dispatch(add(content))
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