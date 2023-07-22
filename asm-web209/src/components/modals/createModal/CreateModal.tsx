import { ReactNode } from 'react';
import styles from './createModal.module.scss';

interface CreateModalProps {
  isShowModal: boolean,
  children: ReactNode
}

const CreateModal = (props: CreateModalProps) => {

  const {isShowModal, children} = props
  return (
    <div className={styles.modal_container + ` ${isShowModal? "" : "hidden"}`}>
      <div className={styles.layer}>
        <div className={styles.modal_content + " md:px-20 md:py-6 flex flex-col gap-y-4"}>
          <h2 className="md:text-3xl text-center">Create</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CreateModal