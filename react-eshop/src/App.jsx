import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import  AdminRoutes  from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
   return (
      <BrowserRouter>
         <AdminRoutes/>
         <UserRoutes/>
      </BrowserRouter>
   )
}

export default App
