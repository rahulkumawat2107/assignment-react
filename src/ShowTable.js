import React from 'react'

function ShowTable({orderId, itemName, quantity, totalAmount}) {
    //console.log(orderId,quantity)
    return (
        <tr>
            <td>{orderId}</td>
            <td>{itemName}</td>
            <td>{quantity}</td>
            <td>{totalAmount}</td>
        </tr>
    )
}

export default ShowTable
