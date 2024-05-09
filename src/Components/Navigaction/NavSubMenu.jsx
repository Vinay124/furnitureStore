import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
// hover images
import storageOrganisation from '../../assets/Navigation_assets/sofa.jpg'
import homeTextiles from '../../assets/Navigation_assets/rack.jpg'
import decoration from '../../assets/Navigation_assets/interior.jpg'
import NavBanner from '../../assets/Navigation_assets/banner_mega_menu_shop.jpg'
import sofas from '../../assets/Navigation_assets/sofas.jpg'
import beds from '../../assets/Navigation_assets/beds.jpg'
import Slider from 'react-slick'


const NavSubMenu = ({ submenus }) => {


    // Slider 
    const Settings = {
        dots: false,
        nav:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'navMenuSlider',
        // nextArrow: <RxDotFilled />,
        // prevArrow: <RxDotFilled />,
        responsive: [{
            breakpoint: 1280,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            }
            },{
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
    }}]
};


    // SliderData
    const sliderData = {
        "data":[
            {
                id:1,
                bannerImage:NavBanner,
            },
            {
                id:2,
                bannerImage:storageOrganisation,
            },
            {
                id:3,
                bannerImage:homeTextiles,
            },
            {
                id:4,
                bannerImage:decoration,
            },
            {
                id:5,
                bannerImage:sofas,
            },
            {
                id:6,
                bannerImage:beds,
            },
        ]
    };

  return (
    <>
    <Row className='submenuWrapper'>
        <Col className='col-lg-4'>
            <Slider {...Settings} >
                {sliderData.data.map(items => (
                    <div className="sliderWrapper">
                        <img src={items.bannerImage} alt='' className='submenuChildImage'/> 
                    </div>
                    
                ))}
            </Slider>   
        </Col>

        <Col className='col-lg-8 submenuchildWrapper'>
        <div className='submenu'>
        {submenus.map((submenu) => {
            return(
                <div>
                <li key={submenu.id} className='submenusiblings'>
                    <div className='sublingsWrapper '>
                        <Link to={submenu.url} className='childrenlink'>{submenu.name}</Link>
                    
                    {/* ChildMenus */}
                        {submenu.submenus.map(childMenu => (
                        <div className='ChildWrapper'>
                            <div key={childMenu.id}>
                            <Link to={childMenu.url}>{childMenu.name}</Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </li>
                </div>
            )
        })}
    </div>
    </Col>
    </Row>
    </>
  )
}

export default NavSubMenu