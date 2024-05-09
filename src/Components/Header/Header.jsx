import React from 'react'
import '../Navigaction/Navigation.moudle.css'
import { FaMobile } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { MdOutlineCardGiftcard } from "react-icons/md";


const Header = ({open}) => {
  return (
    <>
    {open && (
      <header className='headerwrapper'>
        <div className='downloadApp'>
          <FaMobile className='mx-2'/>
          <span>Download the app!</span>
        </div>

          <div className='offerTag'>
            <MdLocalOffer className='mx-2'/>
            <span>15% off on selected kitchen gadgets. Shop now.</span>
          </div>

        <div className='gifttag'>
          <MdOutlineCardGiftcard className='mx-2'/>
          <span>Buy gift card!</span>
          </div>
      </header>
    )}
    </>
  )
}

export default Header