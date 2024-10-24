import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function StandarLayout() {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}
