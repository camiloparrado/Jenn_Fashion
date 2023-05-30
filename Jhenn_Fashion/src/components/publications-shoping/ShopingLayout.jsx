import React from 'react'
import { Header } from '../publications-shoping/Header'
import { Footer } from '../publications-shoping/Footer'
import { Outlet } from 'react-router-dom'

export const ShopingLayout = () => {
  return (
    <>
      <Header/>
        <main className='layout_content'> {/*main*/}
          <Outlet></Outlet>
        </main>
        <Footer/>
    </>
  )
}
