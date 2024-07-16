import React from "react";
import Icon from "../../Molecules/Icon";
import ButtonLogin from "../../Molecules/ButtonLogin";

const EmptyBonScreen = () => {
    return (
        <div className="add_bon">
            <div className="chart_block">
                 <Icon size={80} icon={'Buy'} />
            </div>
            <div className="mt-10 mb-10">
                <span>
                Ajouter des produits dans votre panier
                </span>
            </div>
            <ButtonLogin texte="Ordem" buttonStyle="button_order"  />
        </div>
    )
}

export default EmptyBonScreen;