import React from "react";
import InputText from "../../Molecules/InputText";
import InputSelect from "../../Molecules/InputSelect";
import InputTextArea from "../../Molecules/TextArea";
import InputDate from "../../Molecules/InputDate";
import InputNumber from "../../Molecules/inputNumber";
import ButtonLogin from "../../Molecules/ButtonLogin";

const NewBonPage = () => {
    return (
        <div className="container mx-auto px-4 pt-10 pb-20">
             <div className="flex justify-center">
                <div className="card">
                    <div> 
                        <p>Fournisseur</p>
                        <span>Defina o acesso do usuário selecionando as pastas às quais ele está vinculado.</span>
                        <div className="flex flex-wrap gap-5 gap-y-6 mt-5">
                            <InputSelect label='Fournisseur' />
                            <InputText label='Fournisseur' />
                            <InputText label='Fournisseur' />
                            <InputText label='Fournisseur' />
                        </div>
                    </div>

                    <div> 
                        <p>Quantité</p>
                        <span>Defina o acesso do usuário selecionando as pastas às quais ele está vinculado.</span>
                        <div className="flex flex-wrap gap-2 gap-y-6 mt-5">
                            <InputNumber label='Fournisseur' />
                            <InputDate label='Fournisseur' />
                            <InputDate label='Fournisseur' />
                        </div>
                    </div>

                    <div> 
                        <p>Autres spécifications</p>
                        <span>Defina o acesso do usuário selecionando as pastas às quais ele está vinculado.</span>
                        <div>
                            <InputTextArea label='Fournisseur' />
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-30">
                            <ButtonLogin texte="Cancelar" buttonStyle="button_cancel" />
                            <ButtonLogin texte="Adicionar" buttonStyle="button_valider ml-10" />
                    </div>
                </div>
              
             </div>
           
        </div>
    )
}

export default NewBonPage;