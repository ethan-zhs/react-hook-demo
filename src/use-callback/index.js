import React, { useState, useCallback } from 'react'

const functionCounter = new Set()

export default () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    
    const incrementCount = useCallback(() => {
        // 只有当countA发生变化时，useMemo才会生成新的返回值
        // 否则都用缓存里面的值
        console.log('生成新的函数')
    }, [countA])

    functionCounter.add(incrementCount)

    return (
        <>
            <div>Test useCallback</div>
            <div>CountA: {countA}</div>
            <div>CountB: {countB}</div>
            <div>FunctionCount: {functionCounter.size}</div>
            <div>
                <button onClick={() => setCountA(countA + 1)}>incrementA</button>
                <button onClick={() => setCountB(countB + 1)}>incrementB</button>
            </div>
        </>
    )
}