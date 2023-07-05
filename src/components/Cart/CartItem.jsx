import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

function CartItem({ item }) {

const [subTotal, setSubTotal] = useState(Number(item.price).toFixed(2) * Number(item.quantity))
    // const subTotal = Number(item.price) * Number(item.quantity);

    
    
    // const addTotalToCart = () => {
    //     dispatch({
    //         type: 'UPDATE_SUBTOTAL',
    //         payload: {
    //             subTotal,
    //         }
            
    //     })
    // }

// useEffect(() => {
//     addTotalToCart
// }, [subTotal])
    


    return (
        <>
        <div>

        <div>
            <p> ${item.price} per pound</p>
            <b>
            <p>{item.item}</p>
            </b>
            <h3>{item.quantity} (lbs)</h3>
        </div>
        


        
        
        </div>
        <div>
        <h3>
            Subtotal: ${subTotal}
        </h3>
        </div>
        </>
    )
}

export default CartItem