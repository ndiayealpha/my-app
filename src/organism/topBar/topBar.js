import React from "react";
import Icon from "../../Molecules/Icon";
import ButtonMenuAdd from "../../Molecules/ButtonMenuAdd";

const TopBar = () => {
    return (
        <div className="top_bar">
            <div className="flex items-center">
               <div className="icon_green">
                  <Icon size={24} icon={'Document'} />
               </div>
               <b className="ml-3 mt-1">
                 Todos os produtos
               </b>
            </div>

            <div className="flex items-center">
                <div className="search_div">
                  <Icon size={28} icon="Search" />
                </div>
                <ButtonMenuAdd Text="Um produto" addIcon="add-green" style="green"/>
                <ButtonMenuAdd Text="Um produto" addIcon="add-red" style="red"/>
            </div>
        </div>
    )
}

export default TopBar