import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import meatReducer from "../../redux/reducers/meat.reducer";
import MeatListItem from '../MeatListItem/MeatListItem'

function MeatList() {

    const dispatch = useDispatch();

    const addMeatToCart = () => {
        dispatch({
            type: 'UPDATE_CART',
            payload: {
                ...meat, 
                quantity, 
            }
        })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MEATS' })
    }, []);

    const meatList = useSelector(store => store.meatReducer);
    // const [quantity, setQuantity] = useState(0)
     
    const [quantity, setQuantity] = useState({
		goat: 0,
		phillySteak: 0,
		steak: 0,
		suqaar: 0,
		shishiid: 0,
		tBone: 0,
		chickenSuqaar: 0,
     chickenKutuleeti:0
	});
    console.log('quantity',quantity)

    // const handleChange = (event, property) => {
	// 	console.log(event, property);
	// 	//Similar to in redux -- we dont want to get rid of the id field when we update name
	// 	setMeatQuantity({ ...meatQuantity, [property]: event.target.value });
	// };

    // const [quantity, setQuantity] =useState(0);
    
    
    // const increaseQuantity = ()=> {
    //     setQuantity(quantity + 1)
    // }

    // const decreaseQuantity = ()=> {
    //     setQuantity(quantity - 1)
    // }


    return (
        <>
            <h1>Shop</h1>
            <p>
                <i>Showing 1-8 of 8 results</i>
            </p>

            {meatList.map((meat) => {
                return (

                //     <div>
                //     <br></br>
                //     <p>{meat.type}</p>
                //     <p>{meat.price}</p>
        
                //     <img src={meat.image_url} alt="image of the meat"/>
                //     <br></br>
        
                //     <p>{meat.description}</p>
        
                //     <form >
                //     <button onClick={increaseQuantity}> + </button>
        
                //     <input type="text" value={quantity} onChange={(event) => handleChange(event, {meat.type})}/>
                //     <button onClick={decreaseQuantity}> - </button>
                //     <br />
                    
                //     </form>
                // </div>
                    <MeatListItem 
                    key={meat.id} 
                    meat={meat}

                    

                    />
                )
            })}
            <button onClick={addMeatToCart}>Cart</button>
        </>

    )
}

export default MeatList;