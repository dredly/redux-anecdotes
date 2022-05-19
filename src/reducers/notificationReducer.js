import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Is this even working?'

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		changeMessage(state, action) {
			const newMessage = action.payload
			return newMessage
		}
	}
})

export const { changeMessage } = notificationSlice.actions
export default notificationSlice.reducer