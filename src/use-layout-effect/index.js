import React, { useState, useLayoutEffect, useEffect } from 'react'

export default () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    
    // 因为会阻塞渲染，所以不会存在抖动情况
    // 阻止页面渲染，可能会出现卡顿的情况
    useLayoutEffect(() => {
        if (countA === 0) {
            // 加一个循环延迟后面的代码执行，效果更明显
            let i = 0
            while(i <= 300000000) {
                i++
            }

            const randomNum = 10 + Math.random() * 200
            setCountA(randomNum)
        }
    }, [countA])

    // countB会存在细微抖动(先变成0，再变成随机值)
    useEffect(() => {
        if (countB === 0) {
            // 加一个循环延迟后面的代码执行，效果更明显
            let i = 0
            while(i <= 300000000) {
                i++
            }

            const randomNum = 10 + Math.random() * 200
            setCountB(randomNum)
        }
    }, [countB])

    return (
        <>
            <div>Test useLayoutEffect</div>
            <div>CountA: {countA}</div>
            <div>CountB: {countB}</div>
            <div>
                <button onClick={() => setCountA(0)}>changeA</button>
                <button onClick={() => setCountB(0)}>changeB</button>
            </div>
        </>
    )
}