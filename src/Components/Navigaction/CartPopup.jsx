import React from 'react'
import { IoClose } from "react-icons/io5";
import Cartimage from '../../assets/Cart/Cart.png'

const CartPopup = ({ CartPopup, cart }) => {
  return (
  <>
    <div
    //  className='CartPopupWrapper'
     className={cart ? 'CartOverlay open' : ''}>
        <div className='CartPopupWrapper'>
            <div className='cartIconBox'>
              <IoClose color='white' size={23} onClick={CartPopup}/>
            </div>
          
            <div className='CartInnerDiv'>
              <div className='NoProducts'>
              <img src={Cartimage} alt='' />
              </div>
              <div className='noDataFound'>
                <h2>Your shopping Cart is empty</h2>
                <span> When you add products to your shopping bag, they will appear here.</span>
              </div>


              <button className='LoginButton'>Login and SignUp</button>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default CartPopup