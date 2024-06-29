import React from "react";
import Icon from "./Icon";

const ButtonMenuAdd = (props) => {
    return (
        <div className={`add_style ${props.style} `}>
            <Icon size={28} icon={props.addIcon} />
            <span>{props.Text}</span>
        </div>
    )
}

export default ButtonMenuAdd