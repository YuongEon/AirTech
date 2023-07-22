import React, { useContext, useState } from "react";
import styles from "./tableManageList.module.scss";
import { nanoid } from "nanoid";
import { IProduct } from "../../../interfaces/product";
import ConfirmModal from "../../modals/confirmModal/ConfirmModal";
import CreateModal from "../../modals/createModal/CreateModal";
import { deleteProduct } from "../../../apis/productMethods";
import { ToastContainer, toast } from "react-toastify";
import { GlobalContextApi } from "../../../customHook/useContextApi";
import ProductForm from "../../form/productForm/ProductForm";
import { fetchCategory } from "../../../apis/categoryMethods";
import { fetchBrand } from "../../../apis/brandMethods";

interface TableBarProps {
  title: string;
}

interface TableManageListProps {
  table_bar: TableBarProps[];
  table_values: IProduct[];
}

const TableManageList = (props: TableManageListProps) => {
  const { table_bar, table_values } = props;

  // state
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const store = useContext(GlobalContextApi)

  if(!store) {
    return <div>Loading....</div>
  }

  const {products, setProducts, setCategories, setBrands} = store

  // functions
  const funcDelete = async(_id: string) => {
      await deleteProduct(_id)
      .then(() => {
        setProducts(products.filter((item) => item._id != _id))
        setShowConfirmModal(false)
        toast.success("Delete successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => console.log(error));
      await fetchCategory().then((res) => setCategories(res.data.data));
      await fetchBrand().then((res) => setBrands(res.data.data));
  };

  const onDelete = (_id: string) => {
    setShowConfirmModal(true);
    setSelectedId(_id);
  };

  return (
    <>
      <div className={styles.content + " flex flex-col"}>
        <div className="grow">
          <div
            className={
              styles.table_bar + " bg-white md:mb-2 flex justify-between"
            }
          >
            <ul className={styles.table_bar_items + " flex"}>
              {table_bar.map((item) => (
                <li key={nanoid()}>{item.title}</li>
              ))}
            </ul>
            <div className={styles.table_bar_default_item}>Options</div>
          </div>

          <div className={styles.table_values}>
            {table_values.map((item) => {
              const { _id, name, imgArray, price, quantity, ratting } = item;
              const formattedPrice = price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              });
              const keyId = nanoid();
              return (
                <div
                  key={keyId}
                  className={
                    styles.table_value +
                    " bg-white md:mb-2 flex justify-between"
                  }
                >
                  <ul className={styles.table_value_items + " flex"}>
                    <li>
                      <img src={imgArray[0]} alt={name} />
                    </li>
                    <li>{name}</li>
                    <li>{formattedPrice}</li>
                    <li>{quantity}</li>
                    <li>{ratting || 0}</li>
                  </ul>
                  <div
                    className={
                      styles.table_value_default_item + " flex gap-x-5"
                    }
                  >
                    <button>Update</button>
                    <button onClick={() => onDelete(_id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.create_btn + " grow-0 md:mt-4"}>
          <button onClick={() => setShowCreateModal(true)}>Create</button>
        </div>
      </div>
      <ConfirmModal
        isShowModal={showConfirmModal}
        closeModal={() => setShowConfirmModal(false)}
        message="Bạn có chắc chắn muốn xoá sản phẩm này không?"
        selectedId={selectedId}
        func={funcDelete}
      />
      <CreateModal
        isShowModal={showCreateModal}
        children={<ProductForm closeModal={() => setShowCreateModal(false)}/>}
      />
    </>
  );
};

export default TableManageList;
