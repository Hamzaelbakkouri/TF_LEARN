import { configureStore } from '@reduxjs/toolkit'
import langueSlice from './Slices/language'
import userReducer from './Slices/login';
import syntaxesSlice from './Slices/AddSyntaxe'
import registerslice from './Slices/register';

export const store = configureStore({
    reducer: {
        language: langueSlice,
        user: userReducer,
        addSyntaxe: syntaxesSlice,
        data: dataReducer,
    },
})