import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

import {
    persistStore, persistReducer,
    FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
    REGISTER,
} from 'redux-persist'
    
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { productsApi } from './products/productsApi'


const persistConfig = {
    key: 'todoS',
    storage,
    // blacklist: ['counter'],
    whitelist: ['todo'],
}

//мідлваре працює під капотом
// const customMiddle = (state) => {
//     return (next) => {
//         return (action) => {
//             if (typeof action === 'function') {
//                 action(state.dispatch)
//                 return
//             }
//             return next(action)
//         }
//     }
// }



const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
	reducer: persistedReducer,
	// middleware: [customMiddle],
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(productsApi.middleware),
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(productsApi.middleware),
})

export const persistor = persistStore(store)