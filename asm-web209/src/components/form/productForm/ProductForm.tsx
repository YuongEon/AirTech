import { useContext, useState } from "react";
import styles from "./productForm.module.scss";
import { useForm, useController } from "react-hook-form";
import { GlobalContextApi } from "../../../customHook/useContextApi";
import { IProduct } from "../../../interfaces/product";
import SelectCustom from "../../custom/tag/select/SelectCustom";
import { createProduct } from "../../../apis/productMethods";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../../schemas/product";
import { toast } from "react-toastify";
import { fetchCategory } from "../../../apis/categoryMethods";
import { fetchBrand } from "../../../apis/brandMethods";

interface ProductFormProps {
  product?: IProduct;
  closeModal: () => void;
}

const ProductForm = (props: ProductFormProps) => {
  const { product, closeModal } = props;
  const [productData, setProductData] = useState(product);
  const [previewSource, setPreviewSource] = useState<string>("");

  const store = useContext(GlobalContextApi);
  const reader = new FileReader();

  const { register, control, handleSubmit, formState, reset } = useForm({
    defaultValues: productData,
    resolver: zodResolver(productSchema),
  });

  const { field: brandId } = useController({ name: "brandId", control });
  const { field: categoryId } = useController({ name: "categoryId", control });
  const { field: typeId } = useController({ name: "typeId", control });

  if (!store) {
    return <div>Loading...</div>;
  }

  const {
    categories,
    brands,
    typesProduct,
    products,
    setProducts,
    setBrands,
    setCategories,
  } = store;

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file !== undefined) {
      previewFile(file);
    }
  };

  const previewFile = (file: File) => {
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result as string);
    };
  };

  const handleSave = async (data: IProduct) => {
    const completeData = { ...data, imgArray: [previewSource] };

    await createProduct(completeData)
      .then((res: { data: { data: IProduct } }) => {
        setProducts([...products, res.data.data]);
        reset();
        closeModal();
        toast.success("Create successfully");
      })
      .catch((error) => console.log(error));
    await fetchCategory().then((res) => setCategories(res.data.data));
    await fetchBrand().then((res) => setBrands(res.data.data));
  };

  const handleSelectCategory = (option: string) => {
    categoryId.onChange(option);
  };
  const handleSelectBrand = (option: string) => {
    brandId.onChange(option);
  };
  const handleSelectType = (option: string) => {
    typeId.onChange(option);
  };

  const onCloseModal = () => {
    reset();
    closeModal();
  };

  const { errors } = formState;

  return (
    <form
      onSubmit={handleSubmit(handleSave)}
      className={styles.form + " md:flex md:flex-col md:gap-y-4"}
    >
      <div>
        <p>Name</p>
        <input {...register("name")} />
        <p className={styles.error_text}>{errors.name?.message}</p>
      </div>
      <div className="md:flex md:gap-x-4">
        <div className="w-full">
          <p>Price</p>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
          />
          <p className={styles.error_text}>{errors.price?.message}</p>
        </div>
        <div className="w-full">
          <p>Quantity</p>
          <input
            {...register("quantity", { valueAsNumber: true })}
            type="number"
          />
          <p className={styles.error_text}>{errors.quantity?.message}</p>
        </div>
      </div>
      <div>
        <p>Description</p>
        <input {...register("desc")} />
        <p className={styles.error_text}>{errors.desc?.message}</p>
      </div>
      <div className="flex gap-x-4">
        <div>
          <p>Category</p>
          <SelectCustom
            handleChange={handleSelectCategory}
            options={categories}
            {...register("categoryId")}
          />
          <p className={styles.error_text}>{errors.categoryId?.message}</p>
        </div>
        <div>
          <p>Brand</p>
          <SelectCustom
            handleChange={handleSelectBrand}
            options={brands}
            {...register("brandId")}
          />
          <p className={styles.error_text}>{errors.brandId?.message}</p>
        </div>
        <div>
          <p>Type</p>
          <SelectCustom
            handleChange={handleSelectType}
            options={typesProduct}
            {...register("typeId")}
          />
          <p className={styles.error_text}>{errors.typeId?.message}</p>
        </div>
      </div>
      <div>
        <p>Image</p>
        <input
          type="file"
          {...register("imgArray")}
          onChange={handleFileInputChange}
        />
        <p className={styles.error_text}>{errors.imgArray?.message}</p>
      </div>

      <div className="md:flex md:justify-between md:mt-8">
        <button
          type="button"
          className="bg-red-500 text-white"
          onClick={() => onCloseModal()}
        >
          Cancel
        </button>
        <button type="submit" className="bg-emerald-600 text-white">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
