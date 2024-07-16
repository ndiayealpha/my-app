import React from 'react'
import AchatHorizontalSIdeBar from '../../organism/HorizontalSideBar/AchatHorizontalSideBar';
import EmptyBonScreen from '../../organism/EmptyBonScreen/EmptyBonScreen';
import { Checkbox } from '@mui/material';

const AjoutProduitList = () => {
    const data = [
        { id: '1', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '2', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '3', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '4', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '5', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '6', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '7', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '8', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '9', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '10', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '11', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '12', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '13', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '14', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
        { id: '15', name: 'Efferelgan', age: 'Eff-011', email: 'SANOFI', fournisseur: '1 200 F', DatedeEnvoie: '200', DateDeReception: '240 000 F' },
      ];
    
    return(
        <div className='container mx-auto px-4 pt-10 pb-20'>
            <div>
                <AchatHorizontalSIdeBar />
            </div>
           {true ? <div className='mt-10'>
            <table className='w-full listed-product'>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Produit</th>
                        <th>Référence</th>
                        <th>Fournisseur</th>
                        <th>Prix unitaire </th>
                        <th>Quantité </th>
                        <th>Montant total</th>
                        <th>Panier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td> <div ><span>{item.age}</span></div> </td>
                            <td>{item.email}</td>
                            <td>{item.fournisseur}</td>
                            <td>{item.DatedeEnvoie}</td>
                            <td>{item.DateDeReception}</td>
                            <td><Checkbox /></td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
            </div> : <div className='h-screen flex pt-20 justify-center'>
                       <EmptyBonScreen />
                     </div>}
         
        </div>
    )
}

export default AjoutProduitList;