import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function MeatListItem({meat}) {


    let [quantity, setQuantity] = useState(0);

    





    const dispatch = useDispatch();
    


    const increaseQuantity = ()=> {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = ()=> {
        setQuantity(quantity - 1)
    }
    const addToCart = () =>{
        const added = {meat: meat.type, quantity: quantity , image_url: meat.image_url, price: meat.price, id: meat.id}
        console.log( added);
        setQuantity(0)
        dispatch({type: 'UPDATE_CART', payload: added})


    }




    
    


    return (
        <>
        

        
        <div>
            <br></br>
            <p>{meat.type}</p>
            <p>{meat.price}</p>

            <img src={meat.image_url} alt="image of the meat"/>
            <br></br>

            <p>{meat.description}</p>

            <form >
            <button onClick={increaseQuantity}> + </button>

            <input type="text"  value={quantity}/>
            <button onClick={decreaseQuantity}> - </button>
            <button onClick={()=>addToCart(meat.type)}>Add to Cart</button>
            <br />
            
            </form>
            <br />
            
        </div>

        
        
        </>
    )




}

export default MeatListItem