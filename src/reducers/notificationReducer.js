import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	message: '',
	isShown: false
}

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		changeNotification(state, action) {
			const newMessage = action.payload
			state.message = newMessage
			//Hides the message if it is set to an empty string
			if (newMessage) {
				state.isShown = true
			} else {
				state.isShown = false
			}
		},
	}
})

export const { changeNotification } = notificationSlice.actions
export default notificationSlice.reducer