import React from "react";

const ButtonLogin = (props) => {
    return (
        <button onClick={() => props.onClickButton()} className={props.buttonStyle || 'button_Login'}>
             {props.texte}
        </button>
    )
}

export default ButtonLogin;