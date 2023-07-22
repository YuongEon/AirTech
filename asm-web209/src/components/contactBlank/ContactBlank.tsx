import React from 'react'
import styles from './contactBlank.module.scss';

const ContactBlank = () => {
  return (
    <div className={styles.contact_blank}>
      <div className={styles.contact_blank_wrap}>
        <h2 className='uppercase md:text-3xl md:mb-7'>Contact for Us</h2>
        <form className={styles.form + " gap-y-3 flex flex-col"}>
          <textarea placeholder='Viết gì đó cho chúng tôi' className='text-base'></textarea>
          <div className='gap-x-3'>
            <input type="email" placeholder='example@gmail.com' className='text-base'/>
            <button type='submit' className='uppercase md:text-xl'>send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactBlank