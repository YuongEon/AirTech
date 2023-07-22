import React, { useContext, useEffect, useState } from "react";
import styles from "./adminProductsPage.module.scss";
import { IProduct } from "../../../../../interfaces/product";
import { GlobalContextApi } from "../../../../../customHook/useContextApi";
import { nanoid } from "nanoid";
import TableManageList from "../../../../../components/list/tableManageList/TableManageList";
import ConfirmModal from "../../../../../components/modals/confirmModal/ConfirmModal";

const AminProductsManage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showModal, setShowModal] = useState(false);

  const store = useContext(GlobalContextApi);

  useEffect(() => {
    if (store) setProducts(store.products);
  });

  if (!store) {
    return <div>Loading...</div>;
  }

  const tableBarData = [
    {
      title: "Image",
    },
    {
      title: "Name",
    },
    {
      title: "Price",
    },
    {
      title: "Quantity",
    },
    {
      title: "Ratting",
    },
  ];

  return (
    <>
      <TableManageList table_bar={tableBarData} table_values={products} />
    </>
  );
};

export default AminProductsManage;
