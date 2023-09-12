import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: localStorage.getItem('darkMode') || false,
    reducers:{
        toggleDarkMode: (state, action) => {
            localStorage.setItem('darkMode', !state)
            return !state;
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;