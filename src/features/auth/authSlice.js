import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null ,roles : null},
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken ,roles} = action.payload
            state.accessToken = accessToken
            state.roles = roles
        },
        logOut: (state, action) => {
            state.token = null
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.accessToken