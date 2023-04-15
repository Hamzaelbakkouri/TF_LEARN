import { configureStore } from '@reduxjs/toolkit'
import langueSlice from './Slices/language'
import userReducer from './Slices/login';
import userslice from './Slices/Users';
import { userRegistrationSlice } from './Slices/register';
import { AddlanguageSlice } from './Slices/Addlanguages';
import { EditlanguageSlice } from './Slices/editLanguage';
import { AddsyntaxeSlice } from './Slices/AddSyntaxe'
import SyntaxegetSlice from './Slices/getSyntaxes';

export const store = configureStore({
    reducer: {
        language: langueSlice,
        user: userReducer,
        usersget: userslice,
        syntaxe : SyntaxegetSlice,
        addSyntaxe: AddsyntaxeSlice,
        registerslice: userRegistrationSlice,
        addlanguage: AddlanguageSlice,
        editlanguage: EditlanguageSlice,
    },
})