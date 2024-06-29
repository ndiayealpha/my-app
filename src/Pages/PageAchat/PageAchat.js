import React from "react";
import ProductAchat from "../../organism/Products/ProductAchat";
import AchatHorizontalSIdeBar from "../../organism/HorizontalSideBar/AchatHorizontalSideBar";

const PageAchat = () => {
    return (
        <div className="container mx-auto px-4 pt-10 pb-20">
            <AchatHorizontalSIdeBar />
           
            <div className="flex flex-wrap gap-10 items-center mt-10">
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            <ProductAchat />
            </div>
        </div>
    )
}
 
export default PageAchat;