import { createSlice } from "@reduxjs/toolkit"
import { getTopNews } from "../../services/getNews"

export const getNewsThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(newsSlice.actions.fetching())
            const data = await getTopNews()
            dispatch(newsSlice.actions.fetchSuccess(data))
        }
        catch (error) {
            dispatch(newsSlice.actions.fetchError(error))
        }        
    }
}

const initialState = {
    news: [],
    status: 'idle',
    error: ''
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetching: (state, action) => {
            state.status = 'pending'            
        },
        fetchSuccess: (state, { payload }) => {
            state.status = 'fulfilled'
            state.news = payload.articles
            state.error = ''
        },
        fetchError: (state, { payload }) => {
            state.status = 'rejected'
            state.error = payload
        },
    }
})

export const newsReducer = newsSlice.reducer