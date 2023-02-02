//incdecSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import indecReducer from './reducers/index'
export default configureStore({
    reducer : {
        number : indecReducer
    }
})