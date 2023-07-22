import React, { useContext, useEffect, useState } from 'react'
import styles from './productsPage.module.scss'
import FilterBar from '../../../components/filterBar/FilterBar'
import BannerV2 from '../../../components/bannerV2/BannerV2'
import NormalList from '../../../components/list/normalList/NormalList'
import { GlobalContextApi } from '../../../customHook/useContextApi'
import { IProduct } from '../../../interfaces/product'

const banner = {
  blockHeight: '262px',
  text1: 'NEW STYLE 2023',
  text2: 'AIR',
  substring: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
}

const ProductsPage = () => {
  
  
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [totalPages, setTotalPages] = useState<number>(0); 

  const [filterProducts, setFilterProducts] = useState<IProduct[]>([])


  const store = useContext(GlobalContextApi)

  useEffect(() => {
    setFilterProducts(products)
  }, [])
  
  if (!store) {
    return <div>Loading...</div>;
  }
  const {products, categories} = store;

  const filterByCondition = (typeCondition: string, valueFilter:string) => {
    switch(typeCondition){
      case "earphone":
        // return products.filter(item => item.categoryId == )
    }
  }


  return (
    <div className="container md:mt-10">
      <div className={styles.product_page + " md:pt-6 flex"}>
        <FilterBar/>
        <div className={styles.product_page_content}>
          <BannerV2 {...banner}/>
          <div className='mb-20'></div>
          <NormalList data={filterProducts}/>
        </div>
      </div>
      <div className='mb-20'></div>
    </div>
  )
}

export default ProductsPage