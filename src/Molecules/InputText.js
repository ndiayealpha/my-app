import React from "react";

const InputText = (props) => {
    return (
        <div className="input_container">
            <p><span className={props.labelStyle || 'label_style'}> {props.label} </span></p>
            <input value={props.value} onChange={(e) => props.setOnchange(e.target.value) } className={props.style || 'input_style'} />
        </div>
    )
}

export default InputText;