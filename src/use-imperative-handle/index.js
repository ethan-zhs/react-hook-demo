import React, { useState, useRef, useImperativeHandle } from 'react'

const FancyInput = React.forwardRef((props, ref) => {
    const inputRef = useRef()

    // useImperativeHandle通常需要配合forwardRef一起使用
    // useImperativeHandle向外传自定义的ref.current
    useImperativeHandle(ref, () => {
        return {
            a: 1,
            b: 2,
            inputValue: inputRef.current.value,
            focus: inputRef.current.focus()
        }
    })

    return (
        <input ref={inputRef} />
    )
})

export default () => {
    const customizeRef = useRef()

    const [customizeRefValue, setCustomizeRefValue] = useState({})

    return (
        <>
            <div>Test useImperativeHandle</div>
            <div>Customize ref.current: {JSON.stringify(customizeRefValue)}</div>
            <div>
                <button onClick={() => setCustomizeRefValue(customizeRef.current)}>Button</button>
                <FancyInput ref={customizeRef} />
            </div>
        </>
    )
}