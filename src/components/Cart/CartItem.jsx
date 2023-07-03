import { useDispatch } from "react-redux"
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const subTotal = Number(item.price) * Number(item.quantity);

    // total = 0
   // Nummber(item.price) * Number(item.quantity) = total

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    // let total = 0;
    // const handleTotal = () => {
    //     let sum = 0;
    //     {
    //         cart.map((item, i) => {
    //             sum += item.price / 1
    //         })
    //     }
    //     total += sum;
    //     setTotaldisplay(total);
    // }


    return (
        <>
        <div>

        <div>
            {/* <p>${item.price}</p> */}
            <b>
            <p>{item.item}</p>
            </b>
            <h3>{item.quantity} (lbs)</h3>
        </div>
        

        <div><button onClick={clearCart} className="btn">CLEAR</button></div>

        
        
        </div>
        <div>
        <h2>
            Total: {subTotal}
        </h2>
        </div>
        </>
    )
}

export default CartItem