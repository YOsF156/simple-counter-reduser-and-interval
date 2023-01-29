import React, { memo, useEffect, useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "reset":
            return action.payload
        default:
            break;
    }

}



function Counter({ initNum }) {
    const [counting, dispatchCounting] = useReducer(reducer, { count: initNum, name: "yos" });
    console.log("🚀 ~ file: Counter.jsx:21 ~ Counter ~ counting", counting)


    // useEffect(() => {
    //     const timeIntervel = setInterval(() => {
    //         console.log("run")
    //         setCounting(prev => ++prev)
    //     }, 1000)
    //     return () => { clearInterval(timeIntervel) }
    // }, [])
    return (
        <div className='main'>
            <h1>
                {counting.count}
            </h1>
            <div className="flex">
                <button onClick={() => { dispatchCounting({ type: "increment" }) }}>+</button>
                <button onClick={() => { dispatchCounting({ type: "reset", payload: { count: initNum } }) }}>reset</button>
                <button onClick={() => { dispatchCounting({ type: "decrement" }) }}>-</button>
            </div>
        </div>
    )
}

export default memo(Counter)