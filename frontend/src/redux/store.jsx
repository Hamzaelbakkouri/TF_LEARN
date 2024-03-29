import { configureStore } from '@reduxjs/toolkit'
import langueSlice from './Slices/language'
import userReducer from './Slices/login';
import userslice from './Slices/Users';
import userRegisterSlice from './Slices/register'
import AddlanguageSlice from './Slices/Addlanguages';
import editLanguageSlice from './Slices/editLanguage';
import AddsyntaxeSlice from './Slices/AddSyntaxe'
import SyntaxegetSlice from './Slices/getSyntaxes';
import CommentgetSlice from './Slices/getComments';
import SyntaxegetALLSlice from './Slices/get_All_Syntaxes';
import ExamplegetSlice from './Slices/getexample';
import AddexampleSlice from './Slices/addexample';

export const store = configureStore({
    reducer: {
        language: langueSlice,
        user: userReducer,
        usersget: userslice,
        syntaxe: SyntaxegetSlice,
        comments: CommentgetSlice,
        all_Syntaxes: SyntaxegetALLSlice,
        language_add: AddlanguageSlice,
        Syntaxeadding: AddsyntaxeSlice,
        registerslice: userRegisterSlice,
        editlanguage: editLanguageSlice,
        examples: ExamplegetSlice,
        example_add : AddexampleSlice,
    },
})