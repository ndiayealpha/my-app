import React from "react";

const InputTextArea = (props) => {
    return (
        <div className="input_container">
            <p><span className={props.labelStyle || 'label_style'}> {props.label} </span></p>
            <textarea value={props.value} onChange={(e) => props.setOnchange(e.target.value) } className={props.style || 'input_area_style'} />
        </div>
    )
}

export default InputTextArea;