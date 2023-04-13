import { configureStore } from '@reduxjs/toolkit'
import langueSlice from './Slices/language'
import userReducer from './Slices/login';
import syntaxesSlice from './Slices/AddSyntaxe'
import { userRegistrationSlice } from './Slices/register';
import { AddlanguageSlice } from './Slices/Addlanguages';
import { EditlanguageSlice } from './Slices/editLanguage';
import Users from './Slices/Users';

export const store = configureStore({
    reducer: {
        language: langueSlice,
        user: userReducer,
        addSyntaxe: syntaxesSlice,
        registerslice: userRegistrationSlice,
        addlanguage: AddlanguageSlice,
        editlanguage: EditlanguageSlice,
        getusers : Users
    },
})