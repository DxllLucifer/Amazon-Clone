import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { UseStateValue } from '../Store/StateProvider'
import { getBasketTotal } from '../Store/Reducer';
function SubTotal() {
  const [{basket}] = UseStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
          renderText={(value)=>(
            <>
            <p>
              SubTotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className='subtotal__gift' >
              <input type="checkbox" />
              This order contain gift
            </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix='₹'
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal