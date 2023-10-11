import React, { useEffect, useState } from 'react'
import './Payment.css'
import Header from './Header'
import { UseStateValue } from '../Store/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import {  CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Store/Reducer'
// import {PaymentElement} from '@stripe/react-stripe-js';
import axios from 'axios'

function Payment() {
    const nav = useNavigate()
    const [{user , basket},dispatch ] =  UseStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('')

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    const stripe = useStripe()
    const element = useElements()
    
    useEffect(() => {
      const getClientSecrete = async ()=>{
        const response = await axios.post(`http://localhost:5000/payment/create?total=${getBasketTotal(basket) * 100 }`)
        console.log(response.data.message)
        setClientSecret(response.data.clientSecret)
      }
      getClientSecrete();
    }, [basket])
    
    const handleSubmit =async(event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:element.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent = paymentconfirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })

            nav('/order')
        })
    }
    const handleChange =(event)=>{
        setDisabled(event.empty);
        setError(event.error? event.error.message : '')
    }

  return (
    <>
        <Header/>
        <div className='payment'>
            <div className="payment__container">
                <h1>Checkout (<Link to='/checkout'>{basket.length} items</Link>) </h1>
                {/* paymentsection delivery addres */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p> {user?.email} </p>  
                        <p> 123 stree </p>  
                        <p> pahad ganj, uttar pradesh </p>  
                    </div>
                </div>

                {/* paymentsection review item */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* paymentsection method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                     <form onSubmit={handleSubmit} >
                        <CardElement onChange={handleChange} />
                        <div className="payment__priceContainer">
                             <CurrencyFormat 
                                renderText={(value)=>(
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix='₹'
                             />
                             <button disabled = {processing || disabled || succeeded}> <span> {processing ? <p>processing</p> : 'Buy Now' } </span> </button>
                        </div>
                     </form>
                     {/* <form>
                        <PaymentElement />
                        <button>Submit</button>
                     </form> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment