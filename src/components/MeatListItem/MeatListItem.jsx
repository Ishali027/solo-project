import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function MeatListItem({meat}) {


    let [quantity, setQuantity] = useState(0);

    

	// const handleChange = (event, property) => {
	// 	console.log(event, property);
	// 	//Similar to in redux -- we dont want to get rid of the id field when we update name
	// 	setMeatQuantity({ ...meatQuantity, [property]: event.target.value });
	// };

	// const addToCart = (event) => {
	// 	event.preventDefault();
    //     console.log(meatQuantity);
	// 	dispatch({ type: "", payload: meatQuantity });
    //     setMeatQuantity({	goat: "",
	// 	phillySteak: "",
	// 	steak: "",
	// 	suqaar: "",
	// 	shishiid: "",
	// 	tBone: "",
	// 	chickenSuqaar: "",
    //     chickenKutuleeti:''})
        
	// 	//updates the next plant to have a new id
	// };



    const dispatch = useDispatch();
    


    const increaseQuantity = ()=> {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = ()=> {
        setQuantity(quantity - 1)
    }
    const addToCart = () =>{
        const added = {meat: meat.type, quantity: quantity , image_url: meat.image_url}
        console.log( added);
        setQuantity(0)
        dispatch({type: 'UPDATE_CART', payload: added})

        // dispatch({type:'', payload: {meat: meat.type, quantity: quantity}})

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