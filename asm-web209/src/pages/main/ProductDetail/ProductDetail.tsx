import React, { useContext, useEffect, useState } from "react";
import styles from "./productDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStartFilled } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../../../interfaces/product";
import { useParams } from "react-router-dom";
import { getProduct, getProductFilterBy, getProducts } from "../../../apis/productMethods";
import { GlobalContextApi } from "../../../customHook/useContextApi";
import TopList from "../../../components/list/topList/TopList";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct(id as string);
        setProduct(response.data.data)

      } catch (error) {
        console.log(error);
      }
    }
    void fetchData()
  }, [id])


    const store = useContext(GlobalContextApi);

    if (!store) {
      return <div>Loading...</div>;
    }
  
    const { products } = store;
    const relatedProducts = products
      .filter((item) => item.categoryId == product?.categoryId)
      .filter((item) => item._id != product?._id);

  const formattedPrice = product?.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleChangeQuantity = (typeChange:string) => {
    if(typeChange == "increment"){
      return setQuantity((prev) => prev + 1)
    } else if(typeChange == "decrement"){
      return setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className={styles.product_detail}>
      <div className={styles.product_block + " relative"}>
        <div className={styles.block_img + " absolute"}>
          <img src={product?.imgArray[0]} alt={""} />
        </div>
        <div
          className={
            styles.block_info + " absolute md:p-5 flex gap-y-4 flex-col"
          }
        >
          <h2 className="uppercase md:text-3xl">{product?.name}</h2>
          <div className={styles.ratting + " md:gap-y-2.5"}>
            <FontAwesomeIcon icon={faStartFilled} className="w-3.5" />
            <FontAwesomeIcon icon={faStartFilled} className="w-3.5" />
            <FontAwesomeIcon icon={faStartFilled} className="w-3.5" />
            <FontAwesomeIcon icon={faStartFilled} className="w-3.5" />
            <FontAwesomeIcon icon={faStartFilled} className="w-3.5" />
          </div>
          <h3 className="md:text-xl">{formattedPrice}</h3>
          <div className={styles.color_picker}></div>
          <div className={styles.quantity + " flex gap-x-2"}>
            <button disabled={quantity == 1} onClick={() => handleChangeQuantity("decrement")}>-</button>
            <input type="text" disabled={true} value={quantity} />
            <button disabled={quantity == product?.quantity} onClick={() => handleChangeQuantity("increment")}>+</button>
          </div>
          <button className="uppercase md:text-xl">Add to card</button>
        </div>
      </div>
      <div className="mb-20"></div>

      <div className={styles.product_desc}>
        <h3 className="uppercase text-xl md:mb-3">Mô tả sản phẩm</h3>
        <p className="text-base">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
      </div>
      <div className="mb-20"></div>

      <div className="">
        <TopList data={relatedProducts} label="Related products" navigateTo="/products"/>
      </div>
      <div className="mb-20"></div>
    </div>
  );
};

export default ProductDetail;
