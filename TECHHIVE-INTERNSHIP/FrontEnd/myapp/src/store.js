import { configureStore } from "@reduxjs/toolkit"
import useReducer  from "./slices/userslice";
import taskReducer from './slices/taskslice'

const store = configureStore({
    reducer: {
        tasks:taskReducer,
        users:useReducer
    }
});


export default store