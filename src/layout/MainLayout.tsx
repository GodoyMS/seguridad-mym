import React, { ReactNode } from 'react'
import NavBar from './NavBar'

const MainLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='min-h-screen w-full'>
        <NavBar/>
        <div className=' pt-20'>
        {children}
        </div>
    </div>
  )
}

export default MainLayout