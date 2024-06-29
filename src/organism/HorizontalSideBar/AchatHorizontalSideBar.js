import React from "react";
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import Icon from "../../Molecules/Icon";
const AchatHorizontalSIdeBar = () => {
    return (
        <div className="tab_menu">
           <div className="w-200">
           <Tabs value={'currentTab'}>
              <Tab label="Liste des produits" value="/" component={'Link'} to="/" />
              <Tab label="Historique des achats" value="/about" component={'Link'} to="/about" />
            </Tabs>
           </div>

           <div className="params">
              <div>
                <Icon size={26} icon={'param2'}/>
                <Icon size={26} icon={'param1'}/>
              </div>
              <div className="flex items-center">
                    <div>
                        <span>1</span>
                    </div>
                    <div>
                        <span>2</span>
                    </div>
                    <div>
                        <span>3</span>
                    </div>
                     <b>...</b>
                     <div>
                        <span>20</span>
                    </div>
              </div>
           </div>
        </div>
    )
}

export default AchatHorizontalSIdeBar;