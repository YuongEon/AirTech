import React from 'react'
import ProductCard from '../../card/productCard/ProductCard'
import styles from './topList.module.scss'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../interfaces/product'

interface ITopList {
  label: string,
  navigateTo: string
  data: IProduct[]
}

const TopList = (props: ITopList) => {
  const {label, navigateTo, data} = props
  return (
    <div className={styles.top_list + ""}>
      <div className='flex justify-between md:mb-7'>
        <h2 className='uppercase md:text-xl tracking-light'>{label}</h2>
        <Link to={`${navigateTo}`} className={ styles.view_more}>
          <button className='uppercase'>View More</button>
        </Link>
      </div>
      <div className='flex flex-wrap gap-x-15 md:gap-y-13'>
        {data.map((element: IProduct) => {
          const cardData = {
            id: element._id,
            name: element.name,
            price: element.price,
            ratting: element.ratting,
            img: element.imgArray[0]
          }
          return (
            <ProductCard key={element._id} {...cardData} />
          )
        })}
      </div>
    </div>
  )
}

export default TopList