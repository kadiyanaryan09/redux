import { configureStore } from '@reduxjs/toolkit'
import collectionReducer from './features/collectionSlice'
import searchReducer from './features/Slice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        collection:collectionReducer,
    }




})