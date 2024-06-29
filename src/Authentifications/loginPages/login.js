import React from "react";
import loginimageSvg from '../../Assets/Image-BG.svg'
import logo from '../../Assets/logo.svg'
import TextInputs from "../../Molecules/TextInput";
import ButtonLogin from "../../Molecules/ButtonLogin";
const Login = () => {
    const divStyle = {
        position: 'relative',
        width: '100%', // Adjust as needed
        height: '100vh', // Adjust as needed
      };
    
      const backgroundStyle = {
        content: '""',
        backgroundImage: `url(${loginimageSvg})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        opacity: 0.4, // Adjust opacity as needed
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      };
    return (
        <div className="background">
             
             <div className="bloc-center">
                <div className="bloc-login">
                   <div>
                      <img src={logo} />
                   </div>
                   <div className="login-title">
                  <span className="text-24-b">
                        Uma melhor gestão do seu estoque...
                  </span>
                   </div>
                   <TextInputs label={'E-mail'} label2={''} />
                   <TextInputs label={'Senha'} label2={'Palavra-chave esquecida ?'} />

                   <ButtonLogin />
                </div>
             </div>
        </div>
    )
}

export default Login;