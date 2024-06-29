import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../Authentifications/loginPages/login'
import PrivateLayoute from './privateRoute/privateLayoute'
import HomePage from '../Pages/homePage/homePage'
import PageAchat from '../Pages/PageAchat/PageAchat'
import PageAchat2 from '../Pages/PageAchat/PageAchat2'
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
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default MainRoute;