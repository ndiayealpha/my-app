import React from "react";
import Icon from '../../Molecules/Icon'
import product from '../../Assets/product.svg'
const Productcard = () => {
    return (
        <div className="product_card">
            <div>
                <img src={product} /> 
            </div>
            <div className="mt-3 flex items-center bolc_title">
            <Icon size={18} icon="Folder" color={'black'} />
            <b className="ml-1 mr-2">
                Armazenamento 01
            </b>
             <Icon size={18} icon="Folder" color={'black'}/>
            </div>

            <div className="mt-3">
                <p>
                   Quantidade: 350 unidades
                </p>
                <p>
                   Preço: 1.200 F
                </p>
            </div>
        </div>
    )
} 

export default Productcard;