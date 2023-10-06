import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import Header from './Header'

function Checkout() {
  return (
  <>
    <Header/>
    <div className='checkout'>
        <div className="checkout__left">
          <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="img" className="checkout__ad" />
          <div>
            <h2 className="checkout__title">Your Shoping Basket</h2>
            
            {/* checkoutproduct */}
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