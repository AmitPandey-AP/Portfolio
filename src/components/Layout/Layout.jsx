import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header'

function Layout() {
  return (
    <div className='p-2 h-full w-full'>
        <Header/>
        <Outlet/>
      
    </div>
  )
}

export default Layout
