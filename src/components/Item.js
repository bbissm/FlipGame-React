import React, {useContext} from 'react';
import {FlipContext} from "./App";

function Item({style,icon}) {

    const {handleChange} = useContext(FlipContext)

    function handleClick() {
        handleChange(icon)
    }
    return (
    <div
        className={icon.disabled && 'flipped ' + "flip-box box-content border-4 "}
        onClick={() => handleClick()}
    >
        <div className="flip-box-inner">
            <div className="flip-box-front">
                <div className={icon.color + " front"}>
                    {style.IconTitle()}
                </div>
            </div>
            <div className="flip-box-back"></div>
        </div>
    </div>
    )
}

export default Item;