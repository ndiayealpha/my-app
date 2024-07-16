import React from 'react'
import AchatHorizontalSIdeBar from '../../organism/HorizontalSideBar/AchatHorizontalSideBar';
import EmptyBonScreen from '../../organism/EmptyBonScreen/EmptyBonScreen';

const PageAchat2 = () => {
    const data = [
        { id: 'Ord-0000011', name: 'John Doe', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000012', name: 'Jane Smith', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000013', name: 'Sam Johnson', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000011', name: 'John Doe', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000012', name: 'Jane Smith', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000013', name: 'Sam Johnson', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000011', name: 'John Doe', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000012', name: 'Jane Smith', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000013', name: 'Sam Johnson', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000011', name: 'John Doe', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000012', name: 'Jane Smith', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000013', name: 'Sam Johnson', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000011', name: 'John Doe', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000012', name: 'Jane Smith', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
        { id: 'Ord-0000013', name: 'Sam Johnson', age: 'Commande', email: 'Pendente', fournisseur: 'Alfa001 - mass kandji', DatedeEnvoie: '12/03/2024', DateDeReception: '12/03/2024' },
      ];
    
    return(
        <div className='container mx-auto px-4 pt-10 pb-20'>
            <div>
                <AchatHorizontalSIdeBar />
            </div>
           {true ? <div className='mt-10'>
            <table className='w-full centered-table'>
                    <thead>
                        <tr>
                        <th>#Pedido</th>
                        <th>Criado por</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Fournisseur</th>
                        <th>Data de envio </th>
                        <th>Data de entrega</th>
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

export default PageAchat2;