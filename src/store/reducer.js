import { combineReducers } from 'redux'
import { todoReducer } from './todo/todoReducer'
import { counterReducer } from './counter/counterSlice'
import { newsReducer } from './news/newsReducer'
import { productReducer } from './products/slice'
import { productsApi } from './products/productsApi'

export const reducer = combineReducers({
	counter: counterReducer,
	todo: todoReducer,
	news: newsReducer,
	products: productReducer,
	[productsApi.reducerPath]: productsApi.reducer,
})