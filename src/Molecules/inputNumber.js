import React from "react";

const InputNumber = (props) => {
    return (
        <div className="input_container">
            <p><span className={props.labelStyle || 'label_style'}> {props.label} </span></p>
            <input type="number" value={props.value} onChange={(e) => props.setOnchange(e.target.value) } className={props.style || 'input_style'} />
        </div>
    )
}

export default InputNumber;