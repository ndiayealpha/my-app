import React from "react";
import Icon from "./Icon";

const InputDate = (props) => {
    return (
        <div className="input_calendar_container">
            <p><span className={props.labelStyle || 'label_style'}> {props.label} </span></p>
            <input value={props.value} onChange={(e) => props.setOnchange(e.target.value) } className={props.style || 'input_date_style'} />
            <div className='icon_date'> <Icon color='black' size={24} icon={'Calendar'} /></div>
        </div>
    )
}

export default InputDate;