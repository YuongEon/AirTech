import React, { useState } from 'react'
import styles from './selectCustom.module.scss';


interface Options {
  _id: string,
  name: string
}

interface CustomSelectProps {
  options: Options[];
  handleChange: (option:string) => void;
  defaultOption?:string
}

const SelectCustom = (props: CustomSelectProps) => {
  const {options, handleChange, defaultOption} = props

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(event.target.value)
  };
  return (
    <select className={styles.select} value={defaultOption} onChange={handleSelectChange}>
      <option value="">-- Select an option --</option>
      {options.map(({_id, name}) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  )
}

export default SelectCustom