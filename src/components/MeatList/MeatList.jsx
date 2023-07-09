import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import meatReducer from "../../redux/reducers/meat.reducer";
import MeatListItem from '../MeatListItem/MeatListItem'
import { useHistory } from 'react-router-dom'
import { Button } from "@mui/material";
import {Grid} from "@mui/material";
import Typography from '@mui/material/Typography';


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
        <div style={{display: 'flex', justifyContent: 'center' }}>
        <Typography
        gutterBottom
        variant="h3"
        component="div"
        >
        Shop
        </Typography>

            
    
        </div>
        <p>
                <i>Showing 1-8 of 8 results</i>
            </p>
            <Grid container spacing={1}>
            {meatList.map((meat) => {
                return (

                    <MeatListItem
                        key={meat.id}
                        meat={meat}



                    />
                )
            })}
            
            

                
            </Grid>   
            < Button sx={{ boxSizing: '', color: 'white', backgroundColor: 'brown', fontSize: '1.2rem', padding: '10px 20px' }} onClick={goToCart}>Go To Cart</Button> 
            
        </>

    )
}

export default MeatList;