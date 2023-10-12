import React, { useEffect, useState } from 'react'
import '../components/Home.css'
import Product from './Product'
import Header from './Header'
import axios from 'axios'
export default function Home() {
    const [products, setProducts] = useState([])


    useEffect(() => {
       
            const getData = async()=>{
                try {
                    const response = await axios.get('http://localhost:5000/product/getdata')
                    const data = response.data.product
                    setProducts(data)
                    
                } catch (error) {
                    console.log("Error: ",error)
                }
            }
       getData();
    },[])
    
  return (
    <>
     <Header/>
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt="img" />
            <div className='home__row'>
                
                {Array.isArray(products) && products.map((item) => (
                    <Product
                    key={item._id}
                    id={item._id}
                    title={item.title} 
                    price={item.price} 
                    rating={item.rating} 
                    image={item.image} 
                    />
                ))}
            </div>
        </div>
    </div>
    </>

  )
}
