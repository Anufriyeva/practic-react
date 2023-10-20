import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'todoS',
    storage,
    blacklist: ['counter'],
}

const customMiddle = (state) => {
    return (next) => {
        return (action) => {
            if (typeof action === 'function') {
                action(state.dispatch)
                return
            }
            return next(action)
        }
    }
}



const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer: persistedReducer, middleware: [customMiddle], })

export const persistor = persistStore(store)