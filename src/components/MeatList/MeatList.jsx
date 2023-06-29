import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import meatReducer from "../../redux/reducers/meat.reducer";
import MeatListItem from '../MeatListItem/MeatListItem'

function MeatList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MEATS' })
    }, []);

    const meatList = useSelector(store => store.meatReducer);


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
        </>

    )
}

export default MeatList;