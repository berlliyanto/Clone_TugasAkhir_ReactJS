import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('auth')) || null,
        error: null
    },
    reducers: {
        loginUserSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        loginUserError: (state, action) => {
            state.user = null;
            state.error = action.payload;
        },
    }
})

export const { loginUserSuccess, loginUserError } = authSlice.actions;
export default authSlice.reducer;