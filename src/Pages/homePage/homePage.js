import React from 'react'
import Productcard from '../../organism/Products/ProductCard';
import HorizontalMenus from '../../organism/HorizontalSideBar/HorizontalSidebar';

const HomePage = () => {
    return (
        <div className='container mx-auto px-4 pt-10'>
           
            <div className='mb-5'>
                <HorizontalMenus />
            </div>
            <div className=' flex flex-wrap items-center gap-5'>
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
                <Productcard  />
              
            </div>
        </div>
    )
} 

export default HomePage;