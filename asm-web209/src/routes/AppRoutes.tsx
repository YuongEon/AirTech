import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import HomePage from "../pages/main/HomePage";
import ProductsPage from "../pages/main/ProductsPage";
import MainLayout from "../pages/main/MainLayout";
import ProductDetail from "../pages/main/ProductDetail/ProductDetail";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminPage from "../pages/admin/AdminPage/AdminPage";
import AdminProductsPage from "../pages/admin/AdminProductsPage/AdminProductsPage";
import AminProductsManage from "../pages/admin/AdminProductsPage/productManage/products/AminProductsManage";
import AdminBrandsManage from "../pages/admin/AdminProductsPage/productManage/brands/AdminBrandsManage";
// import AdminCategoriesManage from "../pages/admin/AdminProductsPage/productManage/categories/AdminCategoriesManage";
import { Suspense, lazy } from 'react';

const AdminCategoriesManage = lazy(() => import("../pages/admin/AdminProductsPage/productManage/categories/AdminCategoriesManage"))

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="" element={<Navigate to="home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<AdminPage />} />
          <Route path="" element={<Navigate to="home" replace />} />
          <Route path="products" element={<AdminProductsPage />}>
            <Route path="" element={<Navigate to="product_list" replace />} />
            <Route path="product_list" element={<AminProductsManage/>}/>
            <Route path="brands" element={<AdminBrandsManage/>}/>
            <Route path="categories" element={
              <Suspense fallback={<div>Loading...</div>}>
              <AdminCategoriesManage />
            </Suspense>
            }/>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
