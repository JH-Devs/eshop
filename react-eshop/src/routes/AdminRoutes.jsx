import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout"
import Users from "../pages/admin/Users";
import Products from "../pages/admin/Products"
import Brands from "../pages/admin/Brands"
import Categories from "../pages/admin/Categories";
import Orders from "../pages/admin/Orders";
import Shippings from "../pages/admin/Shippings";
import Payments from "../pages/admin/Payments";
import Documents from "../pages/admin/Documents";
import Statictics from "../pages/admin/Statictics"
import Reviews from "../pages/admin/Reviews";
import Notice from "../pages/admin/Notice"
import Logs from "../pages/admin/Logs"
import Settings from "../pages/admin/Settings"
import Profile from "../pages/admin/Profile"
import Messages from "../pages/admin/Messages"
import AddUser from "../pages/admin/AddUser";
import AddBrand from "../pages/admin/AddBrand";
import AddCategory from "../pages/admin/AddCategory"
import AddShipping from "../pages/admin/AddShipping";
import AddPayment from "../pages/admin/AddPayment";
import AddDocument from "../pages/admin/AddDocument";
import AddProduct from "../pages/admin/AddProduct";
import EditUser from "../pages/admin/EditUser";
import EditProduct from "../pages/admin/EditProduct";
import EditBrand from "../pages/admin/EditBrand";
import EditCategory from "../pages/admin/EditCategory";
import EditShipping from "../pages/admin/Editshipping";
import EditPayment from "../pages/admin/EditPayment"
import EditDocument from "../pages/admin/EditDocument"

const AdminRoutes=() => {
  return (
    <>
 <Routes>
  {/* Pages Admin*/}
   <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
   </Route>
   <Route path="/admin/nastenka" element={<Dashboard/>} /> 

   <Route path="/admin/uzivatele" element={<Users/>} />
   <Route path="/admin/uzivatele/pridat" element={<AddUser/>} />
   <Route path="/admin/uzivatele/upravit/:id" element={<EditUser/>} />


   <Route path="/admin/produkty" element={<Products/>} />
   <Route path="/admin/produkty/pridat" element={<AddProduct/>} />
   <Route path="/admin/produkty/upravit/:id" element={<EditProduct/>} />


   <Route path="/admin/znacky" element={<Brands/>} />
   <Route path="/admin/znacky/pridat" element={<AddBrand/>} />
   <Route path="/admin/znacky/upravit/:id" element={<EditBrand/>} />

   <Route path="/admin/kategorie" element={<Categories/>} />
   <Route path="/admin/kategorie/pridat" element={<AddCategory/>} />
   <Route path="/admin/kategorie/upravit/:id" element={<EditCategory/>} />

   <Route path="/admin/objednavky" element={<Orders/>} />

   <Route path="/admin/doprava" element={<Shippings/>} /> 
   <Route path="/admin/doprava/pridat" element={<AddShipping />} />
   <Route path="/admin/doprava/upravit/:id" element={<EditShipping/>} />

   <Route path="/admin/platba" element={<Payments/>} />
   <Route path="/admin/platba/pridat" element={<AddPayment />} />
   <Route path="/admin/platba/upravit/:id" element={<EditPayment/>} />

   <Route path="/admin/dokumenty" element={<Documents/>} />
   <Route path="/admin/dokumenty/pridat" element={<AddDocument/>} />
   <Route path="/admin/dokumenty/upravit/:id" element={<EditDocument/>} />

   <Route path="/admin/statistiky" element={<Statictics/>} />

   <Route path="/admin/recenze" element={<Reviews/>} />

   <Route path="/admin/upozorneni" element={<Notice/>} />

   <Route path="/admin/zpravy" element={<Messages/>} />

   <Route path="/admin/prihlasovani" element={<Logs/>} />

   <Route path="/admin/statistiky" element={<Statictics/>} />

   <Route path="/admin/nastaveni" element={<Settings/>} />

   <Route path="/admin/profil" element={<Profile/>} />

 </Routes>
 </>
  )
}
export default AdminRoutes