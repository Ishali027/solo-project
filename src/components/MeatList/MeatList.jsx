import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import meatReducer from "../../redux/reducers/meat.reducer";
import MeatListItem from '../MeatListItem/MeatListItem'
import { useHistory } from 'react-router-dom'

function MeatList() {

    const history = useHistory();


    const dispatch = useDispatch();
    const goToCart = () => {
        history.push('/cart')
    }



    useEffect(() => {
        dispatch({ type: 'FETCH_MEATS' })
    }, []);

    const meatList = useSelector(store => store.meatReducer);

    const [quantity, setQuantity] = useState({
        goat: 0,
        phillySteak: 0,
        steak: 0,
        suqaar: 0,
        shishiid: 0,
        tBone: 0,
        chickenSuqaar: 0,
        chickenKutuleeti: 0
    });
    console.log('quantity', quantity)

    


    return (
        <>
            <h1>Shop</h1>
            <p>
                <i>Showing 1-8 of 8 results</i>
            </p>

            {meatList.map((meat) => {
                return (

                    <MeatListItem
                        key={meat.id}
                        meat={meat}
                        


                    />
                )
            })}
            
            <div>
                <button onClick={goToCart}>Go To Cart</button>
            </div>
        </>

    )
}

export default MeatList;