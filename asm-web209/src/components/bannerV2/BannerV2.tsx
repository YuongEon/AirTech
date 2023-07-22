import React from 'react'
import styles from './bannerV2.module.scss';

interface IBannerProps {
  blockHeight: string
  text1: string,
  text2: string
  substring: string
}

const BannerV2 = (props : IBannerProps) => {
  const {blockHeight, text1, text2, substring} = props;
  return (
    <div className={styles.banner} style={{height: blockHeight}}>
      <div className={styles.banner_content + " h-full"}>
        <div className='flex flex-col items-center justify-center md:gap-y-4 h-full'>
          <h2 className="">{text1}</h2>
          <h1>{text2}</h1>
          <h3 className='text-base max-w-md text-center'>{substring}</h3>
        </div>
      </div>
    </div>
  )
}

export default BannerV2