import React from 'react'
import styles from './confirmModal.module.scss';

interface ConfirmMNodalProps {
  message: string,
  isShowModal: boolean,
  selectedId: string,
  closeModal: () => void,
  func: (selectedId:string) => void
}

const ConfirmModal = (props: ConfirmMNodalProps) => {
  const {message, isShowModal, closeModal, selectedId, func} = props

  const confirm = () => {
    func(selectedId)
  }
  return (
    <div className={styles.modal_container + ` ${isShowModal? "" : "hidden"}`}>
      <div className={styles.layer}>
        <div className={styles.modal_content + " md:px-20 md:py-6 flex flex-col gap-y-4"}>
          <h2 className="md:text-3xl text-center">Confirm</h2>
          <h3 className="md:text-base">{message}</h3>
          <div className='flex justify-between md:mt-8'>
            <button className='bg-red-500 text-white' onClick={() => closeModal()}>Cancel</button>
            <button className='bg-emerald-600 text-white' onClick={confirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal