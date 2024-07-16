import React from "react";
import Icon from "./Icon";

const InputSelect = (props) => {
    return (
        <div className="input_container">
            <p><span className={props.labelStyle || 'label_style'}> {props.label} </span></p>
            <select value={props.value} onChange={(e) => props.setOnchange(e.target.value) } className={props.style || 'input_style'} />
        </div>
    )
}

export default InputSelect;