import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

console.log("oncreate store : ", store.getState())

store.subscribe(() => {
    console.log("onSubscribe : ", store.getState());
});

export default store;