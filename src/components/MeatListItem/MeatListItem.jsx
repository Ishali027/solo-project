import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
// import {Card, Button, Image} from '@mui/material/Card';
import { Card, CardContent, CardMedia, Typography, Button, Box, Container } from "@mui/material";



function MeatListItem({ meat }) {


    let [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
    }
    const addToCart = () => {
        const added = { meat: meat.type, quantity: quantity, image_url: meat.image_url, price: meat.price, id: meat.id }
        console.log(added);
        setQuantity(0)
        dispatch({ type: 'UPDATE_CART', payload: added })


    }

    return (


        

        <Card key={meat.id} sx={{maxWidth: 500, mx: 2, my: 5}}
        elevation={6} >
            <CardContent>
                <Typography variant="h5" component="div"><b>{meat.type}</b></Typography>
                <Typography variant="body2" color="text.secondary"><b>{meat.price}</b></Typography>
                </CardContent>

                <CardContent>
                {/* <Typography variant="body2" color="text.secondary"><b>{meat.price}</b></Typography> */}
                <CardMedia component="img" image={meat.image_url} alt="image of the meat" sx={{ width: 200 }} />
                <Typography variant="body1">{meat.description}</Typography>
            </CardContent>
            
            <CardContent>
            <Box sx={{ display: 'fixed', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                <Button onClick={increaseQuantity}>➕</Button>
                <input type="text" value={quantity} />
                <Button onClick={decreaseQuantity}>➖</Button>
                <Button sx={{ color: 'white', backgroundColor: 'brown' }} onClick={() => addToCart(meat.type)}>Add to Cart</Button>
            </Box>
            </CardContent>

        </Card>
        

    );
}

export default MeatListItem
{/* <br></br>
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
            <br /> */}
