import React from 'react'
import './Form.css'
import {useState,useEffect} from 'react'

function PostForm({updateTableFunction}) {

    const [formData, setFormData] = useState({});
    const [orderId, setOrderId] = useState("");
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("0");
    const [totalAmount, setTotalAmount] = useState("0");

    const postData = (e) => {
        e.preventDefault();
        // const id = document.getElementById("orderId").value;
        // const name = document.getElementById("itemName").value;
        // const quant = document.getElementById("quantity").value;
        // const amount = document.getElementById("totalAmount").value;

        if(orderId === "" || itemName === "" || quantity === "" || totalAmount === "")
            return alert("Enter all input fields");
        
        // console.log("hey")

        setFormData({
            orderid: orderId,
            itemname: itemName,
            quantity: quantity,
            totalamount: totalAmount
        })

    }

    // console.log("form", formData);

    useEffect(() => {
        console.log("formData",formData);

        if(Object.keys(formData).length > 0)
        {
            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formData)
            });
            
            updateTableFunction([formData]);
        }
        
    }, [formData])

    // const inputHandler = (e) => {
    //     if(e.target.id === 'orderId'){
    //         setFormData({orderId: e.target.value})
    //     }
    //     if(e.target.id === 'itemName'){
    //         setFormData(...formData,{itemName: e.target.value})
    //     }
    //     if(e.target.id === 'quantity'){
    //         setFormData(...formData,{quantity: e.target.value})
    //     }
    //     if(e.target.id === 'totalAmount'){
    //         setFormData(...formData,{totalAmount: e.target.value})
    //     }
    // }

    //console.log("form",formData)

    return (
        <div className="postform">

            <form onSubmit={postData}>
                <label for="orderId">Order Id</label>
                <input type="text" id="orderId" placeholder="Enter Here" onChange={(e) => setOrderId(e.target.value)}></input>

                <label for="itemName">Item Name</label>
                <input type="text" id="itemName" placeholder="Enter Here" onChange={(e) => setItemName(e.target.value)}></input>

                <label for="quantity">Quantity</label>
                <input type="number" id="quantity"  placeholder="Enter Here" onChange={(e) => setQuantity(e.target.value)}></input>
                
                <label for="totalAmount">Total Amount</label>
                <input type="number" id="totalAmount"  placeholder="Enter Here" onChange={(e) => setTotalAmount(e.target.value)}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm
