import { configureStore } from '@reduxjs/toolkit'
import langueSlice from './Slices/language'
import userReducer from './Slices/login';

export const store = configureStore({
    reducer: {
        language: langueSlice,
        user: userReducer,
    },
})