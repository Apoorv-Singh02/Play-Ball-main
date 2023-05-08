import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userEmail: null,
    userExists: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userEmail = action.payload.email
            state.userExists = true
        },
        logout: (state) => {
            state.userEmail = null
            state.userExists = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice