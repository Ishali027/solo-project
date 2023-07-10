import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "@mui/material";
import { Card, CardContent, CardMedia, Typography, Box, Container } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import {Grid} from "@mui/material";






function Receipt() {

    const dispatch = useDispatch();

    const receipt = useSelector(store => store.receiptReducer)
    const meatReducer = useSelector(store => store.meatReducer)
    const cartList2 = useSelector(store => store.cart);
    const history = useHistory();

    useEffect(() => {
        // dispatch({
        //     type: 'FETCH_RECEIPT'
        // })
    }, [])

    const clearCart2 = () => {
        dispatch({ type: 'CLEAR_CART' })
            history.push('/list')

    };


    let clickStatus = false;
    





    return (
            <>
            {/* <Typography variant="h3" component="div" textAlign="center">
                Thank you for Shopping at African Halal and Deli
            </Typography>
            <Typography variant="h5" component="div" textAlign="center">
                <i>Your order has been received and will be ready for pick shortly</i>
            </Typography>
        
            <Card>
                <CardContent>
            <p>
            Customer Name:     {receipt.customer_name}
            </p>
        
            <br></br>

            <p>
            Item Total:{receipt.total} 
            </p>

        
            {cartList2.map((meat) => {
                return (
                <ul>
                    <li>
                        {meat.meat}
                    </li>
                    
                    <li>
                        {meat.quantity} (lbs)
                    </li>
                </ul>
                )
            })}
            </CardContent>
            

            <div>
            <Button sx={{ boxSizing: '', color: 'white', backgroundColor: 'brown', fontSize: '1.2rem', padding: '10px 20px' }} onClick={clearCart2} > Make Another Order</Button>
            </div>
            </Card>
            </> */}
            <Typography variant="h3" component="div" textAlign="center">
                Thank you for Shopping at African Halal and Deli
            </Typography>
            <Typography variant="h5" component="div" textAlign="center">
                <i>Your order has been received and will be ready for pick shortly</i>
            </Typography>

            <Card elevation={20} sx={{maxWidth: 800, mx: 70 , my: 5 , justifyContent: "center"}}>
                <Grid>
                <CardContent>
                    
                    <Typography color="text.secondary" variant="h4" component="div">
                        Name: {receipt.customer_name}
                    </Typography>

                    <Typography color="text.secondary" variant="h4" component="div">
                        Total: ${receipt.total}
                    </Typography>
                    </CardContent>

                    <CardContent>
                    
                    
                    {cartList2.map((meat) => (
                        <CardContent>
                        
                            <Typography variant="p" color="text.secondary"><b>{meat.meat} {meat.quantity}lbs</b></Typography>
                            
                            {/* <Typography variant="p">{meat.quantity} lbs</Typography> */}
                        
                        </CardContent>
                    ))}
                    
                    
                </CardContent>

                <div>
                <CardActions>
                  
                    </CardActions>
                </div>
                </Grid>
            </Card> 
            <br />
             <Button
                
                        sx={{
                            
                            boxSizing: '',
                            color: 'white',
                            backgroundColor: 'brown',
                            fontSize: '1.2rem',
                            padding: '10px 20px'
                        }}
                        onClick={clearCart2}
                    >
                        Make Another Order
                    </Button>
            </>

    )



}


export default Receipt;