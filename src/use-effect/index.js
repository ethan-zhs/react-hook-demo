import React, { useState, useEffect } from 'react'

const Counter = (props) => {
    // 只要props的属性更新就会重新创建订阅
    useEffect(() => {
        console.log('Effect1触发')
    })

    // 只有countB更新的时候才会重新创建订阅
    useEffect(() => {
        console.log('Effect2触发')
    }, [props.countB])

    return (
        <>
            <div>Test useEffect</div>
            <div>CountA: {props.countA}</div>
            <div>CountB: {props.countB}</div>
        </>
    )
}

export default () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)

    return (
        <>
            <Counter countA={countA} countB={countB} />
            <button onClick={() => setCountA(countA + 1)}>incrementA</button>
            <button onClick={() => setCountB(countB + 1)}>incrementB</button>
        </>
    )
}