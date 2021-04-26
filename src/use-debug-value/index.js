import React, { useState, useDebugValue } from 'react'

function useFriendStatus() {
    const [isOnline, setIsOnline] = useState(false)

    // 1、react官网文档中明确表示，在普通项目开发中不推荐使用useDebugValue，默认的调试输出已经很清晰可用了。
    // 2、除非你的自定义 hook 是作为共享库中的一部分才有价值。这样其他人更容易注意到你自定义的hook状态变化。

    // 在开发者工具中的Component/hook中可以看到， 这个Hook旁边显示标签
    // e.g "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline')

    return [isOnline, setIsOnline]
}

export default () => {
    const [count, setCount] = useState(0)
    const [isOnline, setIsOnline] = useFriendStatus()

    return (
        <>
            <div>Test useDebugValue</div>
            <div>Count: {count}</div>
            <div>IsOnline: {isOnline.toString()}</div>
            <div>
                <button onClick={() => setCount(count + 1)}>increment</button>
                <button onClick={() => setIsOnline(!isOnline)}>{isOnline ? 'turn off' : 'turn on'}</button>
            </div>
        </>
    )
}