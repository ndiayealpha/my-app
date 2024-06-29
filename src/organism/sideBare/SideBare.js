import React from "react";
import logo from "../../Assets/logo.svg"
import profile from '../../Assets/Maskgroup.svg'
import Icon from "../../Molecules/Icon";
const SideBar = () => {
    return (
        <div className="sidebare-contenainer" style={{width: 195, height: window.innerHeight, backgroundColor: 'rgba(2, 135, 45, 1)'}}>
              
             <div className="sidebare-content">
             <img src={logo} />
                <div className=" menu-lists">
                    <div className="mt-5">
                        <Icon size={24} icon={'Document'} />
                        <span>
                           Produtos
                        </span>
                    </div>

                    <div className="mt-5">
                    <Icon size={24} icon={'Activity'} />
                        <span>
                           Produtos
                        </span>
                    </div>

                    <div className="mt-5">
                    <Icon size={24} icon={'Notification'} />
                        <span>
                           Produtos
                        </span>
                    </div>

                    <div className="mt-5">
                    <Icon size={24} icon={'Folder'} />
                        <span>
                           Produtos
                        </span>
                    </div>

                    <div className="mt-5">
                    <Icon size={24} icon={'chart'} />
                        <span>
                           Produtos
                        </span>
                    </div>

                    <div className="mt-5">
                    <Icon size={24} icon={'help'} />
                        <span>
                           Produtos
                        </span>
                    </div>
                </div>
                <div className="mt-5 favoris_list">
                      <div>
                        <span className="mr-2">
                        Favoritos
                        </span>
                        <Icon size={15} icon="arrow-up" />
                        </div>
                        <div className="mt-2">
                        <Icon size={24} icon={'Folder'} />
                            <span>
                            Armazenamento 02
                            </span>
                        </div>
                        <div className="mt-2">
                        <Icon size={24} icon={'Folder'} />
                            <span>
                            Armazenamento 02
                            </span>
                </div>
             </div>
             </div>
             <div className="w-full config-section p-5 mt-5">
                 <div className="flex items-center space-around">
                  <img src={profile} />
                 <span className="ml-2">
                    Alfa Thiam
                 </span>
                 </div>
                 <div className="mt-3">
                 <Icon size={24} icon={'Setting'} />
                    <span className="ml-2">
                       Configurações
                    </span>
                 </div>
             </div>
       
     </div>
    )
}

export default SideBar