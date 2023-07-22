import React, { useContext, useState } from "react";
import styles from "./tableSimpleList.module.scss";
import { IProduct } from "../../../interfaces/product";
import { nanoid } from "nanoid";
import ConfirmModal from "../../modals/confirmModal/ConfirmModal";
import CreateModal from "../../modals/createModal/CreateModal";
import { GlobalContextApi } from "../../../customHook/useContextApi";
import { toast } from "react-toastify";
import OtherForm from "../../form/otherForm/OtherForm";
import { z } from "zod";

interface TableBarProps {
  title: string;
}

interface TableSimpleListProps {
  table_bar: TableBarProps[];
  table_values: {
    _id: string;
    name: string;
    totalProduct?: number;
  }[];
  onCallApiDelete: (_id: string) => void;
  onCallApiCreate: (data: { name: string }) => void;
  title: string;
  schemaPassing: z.TypeOf<any>;
}

const TableSimpleList = (props: TableSimpleListProps) => {
  const {
    table_bar,
    table_values,
    onCallApiCreate,
    onCallApiDelete,
    schemaPassing,
    title,
  } = props;
  // state
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const store = useContext(GlobalContextApi);

  if (!store) {
    return <div>Loading....</div>;
  }

  // functions
  const funcDelete = (_id: string) => {
    onCallApiDelete(_id);
    setShowConfirmModal(false)
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
              const { _id, name, totalProduct } = item;
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
                    <li>{name}</li>
                    <li>{totalProduct}</li>
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
        children={
          <OtherForm
            closeModal={() => setShowCreateModal(false)}
            onCallApi={onCallApiCreate}
            schemaPassing={schemaPassing}
            title={title}
          />
        }
      />
    </>
  );
};

export default TableSimpleList;
