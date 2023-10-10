import { createStore } from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                total: state.total + action.payload,
            }
        case 'decrement':
            return {
                ...state,
                total: state.total - action.payload,
            }
        case 'setStep':
            return {
                ...state,
                step: action.payload,
            }
        case 'createTodo':
            return {
                ...state,
                todo: [...state.todo, {...action.payload}],
            }
        default:
            return state
    }
}

export const store = createStore(reducer, { total: 0, step:1, todo: [] })
// console.log('store', store)

// store.dispatch({ type: 'increment', payload: 1 })
// console.log(store.getState())