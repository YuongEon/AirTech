import React, { useContext } from 'react'
import styles from './homePage.module.scss'
import Banner from '../../../components/banner/Banner'
import TopList from '../../../components/list/topList/TopList';
import { GlobalContextApi } from '../../../customHook/useContextApi';
import ContactBlank from '../../../components/contactBlank/ContactBlank';

const banner1 = {
  url: "src/assets/images/banner/airpod-banner.png",
  name: "airpod-pro-banner",
  imgWidth: '454.25px',
  imgHeight: '454.25px',
  blockHeight: '380px',
  text1: 'EARPHONE',
  text2: 'AIRPOD',
  substring: 'Lorem ipsum is a placeholder text commonly',
  navigateTo: "/"
}

const banner2= {
  url: "src/assets/images/banner/accessory.png",
  name: "accessory-banner",
  imgWidth: '418px',
  imgHeight: '321px',
  blockHeight: '285px',
  text1: "",
  text2: 'AIRTECH',
  substring: 'ACCESSORY',
  navigateTo: "/"
}

const HomePage : React.FC = () => {
  const store = useContext(GlobalContextApi)

  if (!store) {
    return <div>Loading...</div>;
  }

  const {products, typesProduct} = store;

  const typeIdEarphone = typesProduct.find((type) => type.name.toLocaleLowerCase() == "earphone")?._id
  const typeIdAccessory = typesProduct.find((type) => type.name.toLocaleLowerCase() == "accessory")?._id
  
  const topListProductEarphone = products.filter(item => item.typeId === typeIdEarphone).slice(0,4)
  const topListProductAccessory = products.filter(item => item.typeId === typeIdAccessory).slice(0,4)
  
  console.log(topListProductEarphone);
  console.log(typesProduct);
  
  
  
  return (
    <div className="container">
      <div className='mb-10'></div>
      <Banner {...banner1}/>
      <div className='mb-20'></div>
      <TopList label='Best Sale' navigateTo='/products' data={topListProductEarphone}/>
      <div className='mb-20'></div>
      <Banner {...banner2}/>
      <div className='mb-20'></div>
      <TopList label='Feature' navigateTo='/products' data={topListProductAccessory}/>
      <div className='mb-20'></div>
      <ContactBlank/>
      <div className='mb-20'></div>
    </div>
  )
}

export default HomePage