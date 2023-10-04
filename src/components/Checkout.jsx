import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'

function Checkout() {
  return (
  <>
    <div className='checkout'>
        <div className="checkout__left">
          <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="img" className="checkout__ad" />
          <div>
            <h2 className="checkout__title">Your Shoping Basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <SubTotal/>
        </div>
    </div>
  </>
  )
}

export default Checkout