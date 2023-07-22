import React from 'react'
import ProductCard from '../../card/productCard/ProductCard'
import styles from './normalList.module.scss'
import { IProduct } from '../../../interfaces/product'

interface INormalList {
  data: IProduct[]
}

const NormalList = (props: INormalList) => {
  const {data} = props
  console.log(data);
  
  return (
    <div className={styles.normal_list + ""}>
      <div className={styles.list_wrap + ' flex flex-wrap md:gap-y-13'}>
        {data.map((element: IProduct) => {
          const cardData = {
            id: element._id,
            name: element.name,
            price: element.price,
            ratting: element.ratting,
            img: element.imgArray[0]
          }
          return (
            <div className={styles.card_item}>
              <ProductCard key={element._id} {...cardData} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NormalList