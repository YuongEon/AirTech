import React, { createContext, useEffect, useState } from 'react';
import { IProduct } from '../interfaces/product';
import { getProducts } from '../apis/productMethods';
import { getTypesProduct } from '../apis/typeMethod';
import { IType } from '../interfaces/type';
import { Brand } from '../interfaces/brand';
import { fetchBrand } from '../apis/brandMethods';
import { fetchCategory } from '../apis/categoryMethods';
import { Category } from '../interfaces/category';

interface UseContextApiProps {
  children: React.ReactNode;
}

interface Store {
  products: IProduct[],
  typesProduct: IType[],
  brands: Brand[],
  categories: Category[],
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>,
  setBrands: React.Dispatch<React.SetStateAction<Brand[]>>,
  productsRes: {
    [key: string]: any,
  }
}

export const GlobalContextApi = createContext<Store | undefined>(undefined);

const UseContextApi: React.FC<UseContextApiProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [productsRes, setProductRes] = useState({})
  const [typeProducts, setTypeProducts] = useState<IType[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    // products
    const fetchData = async () => {
      try {
        const page = '1'; 
        const limit = '0'; 
        const sortBy = 'createdAt'; 
        const sortOrder = 'asc'; 

        const response = await getProducts(page, limit, sortBy, sortOrder);
        setProducts(response.data.data.docs)
        setProductRes(response.data.data)
         
      } catch (error) {
        console.log(error);
      }
    };
    void fetchData()

    // types
    const fetchTypeData = async () => {
      try {
        const response = await getTypesProduct()
        setTypeProducts(response.data.data)
        
      } catch (error) {
        console.log(error);
      }
    }
    void fetchTypeData()

    // brands
    const fetchBrandData = async () => {
      try {
        const response = await fetchBrand()
        console.log(response);
        setBrands(response.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    void fetchBrandData()

    const fetchCategoryData = async () => {
      try {
        const response = await fetchCategory()
        setCategories(response.data.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    void fetchCategoryData()
  }, []);

  const store: Store = {
    products: products,
    setProducts: setProducts,
    setBrands: setBrands,
    setCategories: setCategories,
    typesProduct: typeProducts,
    brands: brands,
    categories: categories,
    productsRes: productsRes
  };
  

  return (
    <GlobalContextApi.Provider value={store}>
      {children}
    </GlobalContextApi.Provider>
  );
};

export default UseContextApi;
