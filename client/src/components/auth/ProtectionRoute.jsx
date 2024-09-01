import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectionRoute=({children,user,redirect="/login"})=>{
    if(!user) return <Navigate to={redirect}/>
    return children?children:<Outlet/>
}

export default ProtectionRoute