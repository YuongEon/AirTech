import React from 'react'
import styles from  './adminProductsPage.module.scss';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../components/NavbarComponents/Navbar';

const productNavData = [
  {
    title: "Products",
    url: "/admin/products/product_list"
  },
  {
    title: "categories",
    url: "/admin/products/categories"
  },
  {
    title: "brands",
    url: "/admin/products/brands"
  }
]

const AdminProductsPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.products_section}>
        <div className={styles.nav + ' flex justify-between items-center md:mb-4'}>
          <Navbar data={productNavData}/>
        </div>
        <Outlet></Outlet>
      </section>
    </div>
  )
}

export default AdminProductsPage