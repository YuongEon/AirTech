import React from 'react'
import styles from "./productCard.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStartFilled } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface IProductCardProps {
  id: string
  img: string,
  name: string,
  price: number,
  ratting: number
}

const ProductCard = (props: IProductCardProps) => {
  const {id, img, name, price, ratting} = props;
  const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  return (
    <Link to={`/products/${id}`}>
      <div className={styles.product_card}>
      <div className={styles.product_card_img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.product_card_info}>
        <h3 className={styles.product_name + " uppercase"}>{name}</h3>
        <div className={styles.start_ratting + " md:gap-y-2.5"}>
          <FontAwesomeIcon icon={faStartFilled} className='w-3.5'/>
          <FontAwesomeIcon icon={faStartFilled} className='w-3.5'/>
          <FontAwesomeIcon icon={faStartFilled} className='w-3.5'/>
          <FontAwesomeIcon icon={faStartFilled} className='w-3.5'/>
          <FontAwesomeIcon icon={faStartFilled} className='w-3.5'/>
        </div>
        <h3 className={styles.product_price}>{formattedPrice}</h3>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard