import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

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
    // Step 2: dispatch, Step 3: axios.delete in saga
  }

  return (
    <div className="container">
      <h1>Admin</h1>
      {
        ordersList.map(order => (
          // Step 1: make this look better
          <div>
            <p>{order.customer_name}</p>
            <button onClick={() => deleteOrder(order.order_id)}>Delete</button>
          </div>
        ))
      }

    </div>
  );
}

export default InfoPage;
