import React, { useContext, useState } from 'react'
import { GlobalContextApi } from '../../../../../customHook/useContextApi'
import TableManageList from '../../../../../components/list/tableManageList/TableManageList'
import TableSimpleList from '../../../../../components/list/tableSimpleList/TableSimpleList'
import { z } from 'zod'

const AdminBrandsManage = () => {

  const store = useContext(GlobalContextApi)


  if(!store) {
    return <li>Loading...</li>
  }
  
  const {brands} = store

  const tableBarData = [
    {
      title: "Name"
    },
    {
      title: "Product Count"
    }
  ]

  const handleCreate = (data : {name: string}) => {
    console.log(data)
  }

  const handleDelete = (_id: string) => {
    console.log(_id);
    
  }

  const brandSchema = z.object({
    name: z.string().refine((value) => value.trim().length > 0, {
      message: "Field cannot be empty or less than 1 char",
      path: [],
    }),
  })

  return (
    <TableSimpleList table_bar={tableBarData} table_values={brands} onCallApiCreate={handleCreate} onCallApiDelete={handleDelete}  title='Brand name' schemaPassing={brandSchema}/>
  )
}

export default AdminBrandsManage