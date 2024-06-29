import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import SideBar from "../../organism/sideBare/SideBare";
import TopBar from "../../organism/topBar/topBar";
const PrivateLayoute = () => {
    return (
        <div style={{flexDirection: 'row' , backgroundColor:'rgba(244, 244, 244, 1)', display: 'flex'}}>
            <SideBar />
             <div className="w-full" >
                <TopBar />
                <Outlet />
             </div>
        </div>
    )
}

export default PrivateLayoute;