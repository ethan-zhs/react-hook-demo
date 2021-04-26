import React, { useState, useMemo } from 'react'

export default () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)

    const incrementCount = useMemo(() => {
        // 只有当countA发生变化时，useMemo才会生成新的返回值
        // 否则都用缓存里面的值
        console.log('触发更新')
        return parseInt(Math.random() * 1000, 10)
    }, [countA])

    return (
        <>
            <div>Test useMemo</div>
            <div>CountA: {countA}</div>
            <div>CountB: {countB}</div>
            <div>IncrementCount: {incrementCount}</div>
            <div>
                <button onClick={() => setCountA(countA + 1)}>incrementA</button>
                <button onClick={() => setCountB(countB + 1)}>incrementB</button>
            </div>
        </>
    )
}