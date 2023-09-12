import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import darkModeReducer from './slices/darkModeSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        darkMode: darkModeReducer
    },
});

console.log("oncreate store : ", store.getState())

store.subscribe(() => {
    console.log("onSubscribe : ", store.getState());
});

export default store;