import React from 'react'
import AdminHeader from '../../components/headerComponents/adminHeader/AdminHeader'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='w-container-width m-0-auto'>
      <AdminHeader/>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout