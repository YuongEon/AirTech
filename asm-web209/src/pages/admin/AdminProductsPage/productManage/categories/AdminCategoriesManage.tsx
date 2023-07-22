import React, { useContext } from "react";
import { GlobalContextApi } from "../../../../../customHook/useContextApi";
import TableSimpleList from "../../../../../components/list/tableSimpleList/TableSimpleList";
import { z } from "zod";
import { toast } from "react-toastify";
import { createCategory, deleteCategory } from "../../../../../apis/categoryMethods";
import { Category } from "../../../../../interfaces/category";
import { IProduct } from "../../../../../interfaces/product";

const AdminCategoriesManage = () => {
  const store = useContext(GlobalContextApi);

  if (!store) {
    return <li>Loading...</li>;
  }

  const { categories, setCategories, setProducts } = store;

  const tableBarData = [
    {
      title: "Name",
    },
    {
      title: "Product Count",
    },
  ];

  const handleCreate = (data: { name: string }) => {
    createCategory(data)
      .then((res: {data:{data: Category}}) => {
        setCategories([...categories, res.data.data])
        toast.success("Create category successfully")
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const handleDelete = (_id: string) => {
    deleteCategory(_id)
      .then(() => {
        setCategories(categories.filter(item => item._id != _id))
        setProducts((prev) => prev.filter((item) => item.categoryId !== _id));
        toast.success("Delete category successfully")
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const categorySchema = z.object({
    name: z.string().refine((value) => value.trim().length > 0, {
      message: "Field cannot be empty or less than 1 char",
      path: [],
    }),
  });

  return (
    <TableSimpleList
      table_bar={tableBarData}
      table_values={categories}
      onCallApiCreate={handleCreate}
      onCallApiDelete={handleDelete}
      title="Category name"
      schemaPassing={categorySchema}
    />
  );
};

export default AdminCategoriesManage;
