import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';





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
            <h2>Thank you for shopping at African Halal & Deli</h2>
            <i>
            <h3>Your has been order received and will be ready shortly</h3>
            </i>
        <div>
        <div>
            <p>
            Customer Name:     {receipt.customer_name}
            </p>
        
            <br></br>

            <p>
            Item Total:{receipt.total} 
            </p>

        </div>
            
            

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
            
            </div>

            <div>
            <button onClick={clearCart2} className="btn" > Make Another Order</button>
            </div>

            </>

    )



}


export default Receipt;