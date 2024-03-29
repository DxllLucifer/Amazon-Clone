import React from 'react'
import './Product.css'
import { UseStateValue } from '../Store/StateProvider'
function Product({id, title, image, price, rating}) {
  const [{},dispatch] = UseStateValue()
  const addToBasket = ()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <div className='product'>
        <div className="product__info">
            <p> {title} </p>
            <p className='Product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) =>(
                    <p>⭐</p>
                    ) )}
            </div>
        </div>
            <img src={image} alt='product img' />
            <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product
 