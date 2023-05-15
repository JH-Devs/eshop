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

   <Route path="/admin/produkty" element={<Products/>} />


   <Route path="/admin/znacky" element={<Brands/>} />

   <Route path="/admin/kategorie" element={<Categories/>} />

   <Route path="/admin/objednavky" element={<Orders/>} />

   <Route path="/admin/doprava" element={<Shippings/>} /> 

   <Route path="/admin/platba" element={<Payments/>} />

   <Route path="/admin/dokumenty" element={<Documents/>} />

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