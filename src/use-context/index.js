import React, { useState, useContext } from 'react'
import TestContext from './create_context'

// useContext类似TestContext.Consumer
const Counter = () => {
    const count = useContext(TestContext)

    return (
        <>
            <div>Test useContext</div>
            <div>Count: {count}</div>
        </>
    )
}

// 带TestContext.Provider的父组件
export default ({initCount = 0}) => {
    const [count, setCount] = useState(initCount)

    return (
        <TestContext.Provider value={count}>
            <Counter />
            <button onClick={() => setCount(count + 1)}>increment</button>
        </TestContext.Provider>
    )
}