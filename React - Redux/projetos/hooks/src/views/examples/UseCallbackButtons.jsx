import React from "react";

const UseCallbackButtons = (props)=>{
    console.log('rende........')
    return(
        <div>
            <button className="btn"
                onClick={() => props.inc(6)}>+6</button>
            <button className="btn"
                onClick={() => props.inc(9)}>+9</button>
            <button className="btn"
                onClick={() => props.inc(12)}>+12</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)