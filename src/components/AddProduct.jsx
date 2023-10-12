import React, { useState } from 'react'
import Header from './Header'
import './AddProduct.css'
import axios from 'axios'


function AddProduct() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState()
    const [image, setimage] = useState()

    const handleProductSubmit = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/product',{title,price,rating,image})
            console.log(response.data);
            setTitle('');
            setPrice('');
            setRating('');
            setimage('');
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <Header/>
        <div className="product">
            <div className="product__container">
            <h1>Add Product</h1>
                <form >
                    <h5>title</h5>
                    <input value={title} type="text" onChange={(e)=>{ setTitle(e.target.value)}} />
                    <h5>Price</h5>
                    <input value={price} type="number" onChange={(e)=>{setPrice(e.target.value)}} />
                    <h5>Rating</h5>
                    <input value={rating} type="number" onChange={(e)=>{setRating(e.target.value)}} />
                    <h5>Image</h5>
                    <input value={image} type="text" onChange={(e)=>{setimage(e.target.value)}}/>
                    <button type='submit' onClick={handleProductSubmit} className='product__addProductButton'>Add Product</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddProduct