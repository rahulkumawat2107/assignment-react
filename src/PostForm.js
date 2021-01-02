import React from 'react'
import {useState,useEffect} from 'react'

function PostForm() {

    const [formData, setFormData] = useState({orderId:"", itemName:"", quantity:"", totalAmount:""});

    const postData = () => {
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData)
        });
    }

    const inputHandler = (e) => {
        if(e.target.id === 'orderId'){
            setFormData({orderId: e.target.value})
        }
        if(e.target.id === 'itemName'){
            setFormData({itemName: e.target.value})
        }
        if(e.target.id === 'quantity'){
            setFormData({quantity: e.target.value})
        }
        if(e.target.id === 'totalAmount'){
            setFormData({totalAmount: e.target.value})
        }
    }

    console.log("form",formData)

    return (
        <div>
            <form action={postData}>
                <label for="orderId">Order Id</label>
                <input type="text" id="orderId" onChange={inputHandler} placeholder="Enter Here"></input>

                <label for="itemName">Item Name</label>
                <input type="text" id="itemName" onChange={inputHandler} placeholder="Enter Here"></input>

                <label for="quantity">Quantity</label>
                <input type="text" id="quantity" onChange={inputHandler} placeholder="Enter Here"></input>
                
                <label for="totalAmount">Total Amount</label>
                <input type="text" id="totalAmount" onChange={inputHandler} placeholder="Enter Here"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm
