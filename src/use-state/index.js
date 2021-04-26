import React, { useState } from 'react'

export default ({initCount = 0}) => {
    const [count, setCount] = useState(initCount)

    return (
        <>
            <div>Test useState</div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    )
}