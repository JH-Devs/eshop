import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/user/Home'
import UserLayout from "../layouts/UserLayout";

const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default UserRoutes