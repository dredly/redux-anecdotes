import { createSlice } from "@reduxjs/toolkit"

const initialState = NaN

const timeoutSlice = createSlice({
	name: 'timeout',
	initialState,
	reducers: {
		saveTimeoutId(state, action) {
			const newId = action.payload
			return newId
		}
	}
})

export const { saveTimeoutId } = timeoutSlice.actions
export default timeoutSlice.reducer