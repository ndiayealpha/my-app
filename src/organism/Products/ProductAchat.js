import React from "react";
import Icon from '../../Molecules/Icon'
import product from '../../Assets/product1.svg'
import ButtonLogin from "../../Molecules/ButtonLogin";
const ProductAchat = () => {
    return (
        <div className="product_achat">
            <div className="block-images">
                <img src={product} /> 
            </div>
            <div className="mt-7 mt-3 flex bolc_title">
            <b className="ml-1 mr-2">
            Doliprane
            </b>
             <div className="product_owner mt-1">
                 <span>
                    Sanofi
                 </span> 
             </div>
            </div>
            <div className="price">
                <b>
                  2 000 FCFA
                </b>
            </div>

            <div className="mt-3 mb-3 flex justify-center">
               <ButtonLogin texte="Acheter" buttonStyle="button_achat" />
            </div>
        </div>
    )
} 

export default ProductAchat;