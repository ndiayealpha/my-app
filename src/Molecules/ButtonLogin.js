import React from "react";

const ButtonLogin = (props) => {
    return (
        <button className={props.buttonStyle || 'button_Login'}>
             {props.texte}
        </button>
    )
}

export default ButtonLogin;