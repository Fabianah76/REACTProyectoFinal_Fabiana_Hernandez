import {Link, Outlet } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import Stack from 'react-bootstrap/Stack';
import "./NavBar.css";

function NavBar() {
  return (
    <>
    <Stack direction="horizontal" gap={3}>
    
        <div className='navbar'>
    
            <div>
                <img className="logo" src="/Poch..png" alt="logoPoch." />
            </div>
    
            <ul className='navbar-links'>
                <li className='navbar-item'>
                    <Link to= {"/" } className="button">Home</Link>
                </li>
                               
                <li className='navbar-item'>
                    <Link to= {"category/tops"} className="button">Tops</Link>
                </li>
                <li className='navbar-item'>
                    <Link to= {"category/bottoms"} className="button">Bottoms</Link>  
                </li>
                <li className='navbar-item'>
                    <Link to= {"category/calzado"} className="button">Calzado</Link>  
                </li>
                
            </ul>
            <div className='carrito'> 
                <FiShoppingCart />
                <span className='badge'>5</span>
            </div>
        
        </div>
    </Stack>
    <Outlet/>
    </>
  )
}

export default NavBar