import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Box, Container } from "@mui/material";


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
        <Card elevation={6} sx={{maxWidth: 500, mx: 2, my: 5}}>
            <CardContent>
            <CardMedia component="img" image={item.image_url} sx={{width: 200}}></CardMedia>
            <Typography> ${item.price} per pound</Typography>
            
            <Typography>{item.item}</Typography>
            
            
            <Typography>{item.quantity} lbs</Typography>
        
        


        
        
        
        
        <Typography variant='p'>
            Total: ${subTotal}
        </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export default CartItem