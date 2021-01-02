import React from 'react'
import {useState,useEffect} from 'react'

function PostForm({updateTableFunction}) {

    const [formData, setFormData] = useState({});
    // const [orderId, setOrderId] = useState("");
    // const [itemName, setItemName] = useState("");
    // const [quantity, setQuantity] = useState("0");
    // const [totalAmount, setTotalAmount] = useState("0");

    const postData = (e) => {
        e.preventDefault();
        const id = document.getElementById("orderId").value;
        const name = document.getElementById("itemName").value;
        const quant = document.getElementById("quantity").value;
        const amount = document.getElementById("totalAmount").value;

        if(id === "" || name === "" || quant === "" || amount ==="")
            return alert("Enter all input fields");
        
        console.log("hey")

        setFormData({
            orderId: id,
            itemName: name,
            quantity: quant,
            totalAmount: amount
        })

    }

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
        <div>
            <form onSubmit={postData}>
                <label for="orderId">Order Id</label>
                <input type="text" id="orderId" placeholder="Enter Here"></input>

                <label for="itemName">Item Name</label>
                <input type="text" id="itemName" placeholder="Enter Here"></input>

                <label for="quantity">Quantity</label>
                <input type="number" id="quantity"  placeholder="Enter Here"></input>
                
                <label for="totalAmount">Total Amount</label>
                <input type="number" id="totalAmount"  placeholder="Enter Here"></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm
