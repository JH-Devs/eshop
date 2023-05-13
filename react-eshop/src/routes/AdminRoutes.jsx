import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AdminLayout from "../layouts/AdminLayout"

const AdminRoutes=() => {
  return (
 <Routes>
   <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
   </Route>
 </Routes>
  )
}
export default AdminRoutes