import React, { useReducer } from 'react'

export default () => {
    const initialState = { count: 0 }

    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 }
            case 'DECREMENT':
                return { count: state.count <= 0 ? 0 : state.count - 1 }
            default:
                return initialState
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>Test useReducer</div>
            <div>Count: {state.count}</div>
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
            </div>
        </>
    )
}