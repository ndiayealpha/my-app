import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../Authentifications/loginPages/login'
import PrivateLayoute from './privateRoute/privateLayoute'
import HomePage from '../Pages/homePage/homePage'
import PageAchat from '../Pages/PageAchat/PageAchat'
import PageAchat2 from '../Pages/PageAchat/PageAchat2'
import NewBonPage from '../Pages/newBon/NewBon'
import AjoutProduitList from '../Pages/AddProductList/AddProductLIst'
import ValiderBon from '../Pages/newBon/validerBon'
const MainRoute = () => {
    return (
        <BrowserRouter>
          <Routes >
        
            <Route path='/' element={<Login />} />
            <Route path='login-page' element={<Login />} />

            <Route path='/' element={<PrivateLayoute />}>
               <Route path='/home-page' element={<HomePage />} />
               <Route path='/page-achat' element={<PageAchat />} />
               <Route path='/page-achat2' element={<PageAchat2 />} />
               <Route path='/ajouter_bon' element={<NewBonPage />} />
               <Route path='/Ajout_produits' element={<AjoutProduitList />} />
               <Route path='/valider_bon' element={<ValiderBon />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default MainRoute;