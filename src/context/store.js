import { configureStore } from '@reduxjs/toolkit'
import usersSlice, { addToUsers } from './usersSlice'


export const  store = configureStore({
    reducer: {
        users :usersSlice
    }, 
})