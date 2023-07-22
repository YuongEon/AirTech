import React from 'react'
import MainHeader from '../../components/headerComponents/mainHeader/MainHeader'
import { Outlet } from 'react-router-dom'
import MainFooter from '../../components/footerComponents/mainFooter/MainFooter'

const MainLayout = () => {
  return (
    <div className='w-container-width m-0-auto'>
      <MainHeader/>
        <Outlet></Outlet>
      <MainFooter/>
    </div>
  )
}

export default MainLayout