import { Link, Outlet } from 'react-router-dom'
import NavBar from "../Components/Navbar/NavBar"

function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer />
    </>
  )
}


export default Layout