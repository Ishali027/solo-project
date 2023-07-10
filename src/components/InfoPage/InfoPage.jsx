import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
import { Card, CardContent, CardMedia, Typography, Box, Container, Button, Grid } from "@mui/material";


function InfoPage() {
const dispatch = useDispatch();
const ordersList = useSelector(store => store.orderReducer)

  useEffect(() => {
    dispatch({
      type: 'GET_ALL_ORDERS'
    })
  }, [])

  const deleteOrder = (orderId) => {
    console.log('delete', orderId);
    dispatch ({type: 'DELETE', payload: orderId})
    // Step 2: dispatch, Step 3: axios.delete in saga
  }

  const updateOrder = (updateId) => {
    console.log('update', updateId);
    dispatch({type: 'UPDATE_ORDERS', payload: updateId})
  }

  

  return (
    <>
    {/* <div className="container"> */}
      {/* <h1 style={{textAlign: "center"}}>Admin</h1> */}
      <Typography variant="h1" component="div" textAlign="center">
        
          Order List
        
      </Typography>
      <Grid container >
      <Card sx={{maxWidth: 900, mx: 70, my: 5, backgroundColor: "brown", color: "white"}}>
      <table>
        <CardContent>
              <thead>
                <tr>

                  <th>
                    Name
                  </th>
                  <br></br> 
                  <th>
                    id:
                  </th>
                  <br></br>
                  <th>
                    Price
                  </th>
                  <br></br>
                  <th>
                    Item
                  </th>
                  <br></br>
                  <th>
                    Quantity
                  </th>
                  <br></br>
                  <th>
                    Total
                  </th>
                  <br></br>
                  <th>
                    Order Status
                  </th>
                  <br></br>
                  <th>
                    
                  </th>
                  <br></br>
                  <th>
                    
                  </th>
                </tr>
              </thead>
              
              <tbody>
              {
        ordersList.map((order, i ) => (
          <tr key={i}>
          {/* // Step 1: make this look better
          // render more columns please */}
          
            {/* {JSON.stringify(order)} */}
          <td>
            
              {order.customer_name}
        
          
          </td>
          <br></br>
          <td>
            
            {order.order_id}
            
          </td>
          <br></br>
          <td>
            {order.price}
          </td>
          <br></br>
          <td>
            {order.type}
          </td>
          <br></br>
          <td>
            {order.quantity}(lbs)
          </td>
          <br></br>
          <td>
            {order.total}
          </td>
          <br></br>
            <td>
              {JSON.stringify(order.completion_status)}
          </td>
          <br />
          <Box>
          <td>
          
          <Button sx={{backgroundColor: "grey", color: "white"}} onClick={() => updateOrder(order.order_id)}>Completed</Button>

          </td>
          {/* <br></br> */}

          <td>
          <Button sx={{backgroundColor: "grey", color: "white"}} onClick={() => deleteOrder(order.order_id)}>Delete</Button>
          </td>
          </Box>
          
          
          </tr>
        ))}
     
        </tbody></CardContent>
        </table>
      
     
      </Card></Grid>
    {/* </div> */}

      
    </>
  );
}

export default InfoPage;
