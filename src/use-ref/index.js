import React, { useState, useRef } from 'react'

export default () => {
    const btnARef = useRef()
    const btnBRef = useRef()

    const [buttonName, setButtonName] = useState('')

    return (
        <>
            <div>Test useRef</div>
            <div>Click: {buttonName}</div>
            <div>
                <button onClick={() => setButtonName(btnARef.current.innerText)} ref={btnARef}>ButtonA</button>
                <button onClick={() => setButtonName(btnBRef.current.innerText)} ref={btnBRef}>ButtonB</button>
            </div>
        </>
    )
}