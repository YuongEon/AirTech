import React from 'react'
import styles from './banner.module.scss'
import { Link } from 'react-router-dom'

interface IBannerProps {
  url: string,
  name?: string,
  imgWidth: string
  imgHeight: string,
  blockHeight: string
  text1?: string,
  text2: string
  substring: string
  navigateTo: string
}

const Banner = (props: IBannerProps) => {
  const {url, name, imgWidth, imgHeight, blockHeight, navigateTo, text1, text2} = props;
  return (
    <div className={styles.banner + " relative"} style={{height: blockHeight}}>
      <img src={url} alt={name} className='absolute'style={{width: imgWidth, height: imgHeight}}/>
      <div className={styles.banner_content + " absolute"}>
        <div className='flex md:gap-x-2.5'>
          <h1 className={styles.text1}>{text1}</h1>
          <h1>{text2}</h1>
        </div>
        <h3>Lorem ipsum is a placeholder text commonly </h3>
      </div>
      <div className={styles.viewmore_btn + " absolute"}>
        <Link to={`${navigateTo}`}>
          VIEW MORE
        </Link>
      </div>
    </div>
  )
}

export default Banner