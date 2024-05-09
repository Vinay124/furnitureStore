import React, { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Logo from '../../assets/Logo/Logo.png'
import './Navigation.moudle.css'
// navdata and submenu
import { NavData } from './NavData'
import NavSubMenu from './NavSubMenu'
import { Link } from 'react-router-dom';
import { RiUserLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown, MdOutlineStore } from "react-icons/md";
import Header from '../Header/Header';
import { RiCloseLargeLine } from "react-icons/ri";
import CartPopup from './CartPopup';



const Navigation = () => {

    const [activeSubmenu, setActiveSubmenu] = useState(null);

    // Cart popip
    const [cart, setCart] = useState(false);

    // Cart POPUP HANDLER
    const openCartPopup = () => {
        setCart(!cart);
    }
    
    // const handlemouseEnter = (open) => {
    //     setCart(!open)
    // } 

    // const handleMouseLeave = () => {
    //     setCart()
    // }

    // Cart POPUP
    // const cartPopup = () => {
    //     setCart(!cart)
    // }

   
    //   onclick
    const handleClick = (submenuId) => {
        if (activeSubmenu === submenuId) {
          setActiveSubmenu(null);
        } else {
          setActiveSubmenu(submenuId);
        }
      };

      
    // //   hover onmouseeenter
    //    const handlemouseEnter = (submenuId) => {
    //     setActiveSubmenu(submenuId);
    //   };
    
    //   const handleMouseleave = () => {
    //     setActiveSubmenu(null);
    //   };
      

    // Header Open and Close
    const [open, setOpen] = useState();
    // Header Openand Close Handler
    const openPopup = () => {
        setOpen(!open);
    }

  return (
    <>
    <header>
    <Header open={open}/>
        <nav className={`navbarMain ${open ? 'headerActive' : ''}`}>
            <div>
                <img src={Logo} className='navbarLogo'/>
            </div>

            {/* Navigation data */}
            <div className='nav-menuDiv customContainer'>
                <ul className='nav-menuData ' >
                    {NavData.map((menuItem) => {
                        return(
                            <li key={menuItem.id} 
                            // onMouseEnter={() => handlemouseEnter(menuItem.id)}
                            // onMouseLeave={handleMouseleave}
                            className="navLinnkData mx-3"
                            >
                                <div className='d-flex align-items-center'>
                                <Link to={menuItem.url}>
                                    <div className='d-flex align-items-center'>
                                        <div>{menuItem.name}</div>
                                    </div>
                                </Link>
                                        <div className='mx-1' 
                                        onClick={() => handleClick(menuItem.id)}>{menuItem.icon}</div>
                                </div>
                                {menuItem.submenu && activeSubmenu === menuItem.id && (
                                    <NavSubMenu submenus={menuItem.submenu}/>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Other Icons */}

            <div className='menu-icons'>
                <div>
                    <CiSearch size={20}/>
                </div>  
                <div>
                    <MdOutlineStore size={20}/>
                    <MdOutlineKeyboardArrowDown size={20}/>
                </div> 
                <div>
                    <BsBoxSeam size={20}/>
                    <MdOutlineKeyboardArrowDown size={20}/>
                </div> 
                <div>
                    <PiShoppingCartLight size={20}/>
                    <MdOutlineKeyboardArrowDown size={20} onClick={openCartPopup}/>
                </div>
                <div>
                    <RiUserLine size={20}/>
                </div>
                <div onClick={openPopup}>
                    {open ?  <RiCloseLargeLine size={20}/> : <RxHamburgerMenu size={20}/>}
                </div>
            </div>

            {/* STORE LOCATOR */}

            {/*  */}
            
            {/* Cart Popup  */}
            {cart && (
                <CartPopup CartPopup={openCartPopup} cart={cart}/>
            )}
        </nav>
        </header>   
    </>
  )
}

export default Navigation