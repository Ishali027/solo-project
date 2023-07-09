import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';





function Receipt() {

    const dispatch = useDispatch();

    const receipt = useSelector(store => store.receiptReducer)
    const cartList2 = useSelector(store => store.cart);
    const history = useHistory();

    useEffect(() => {
        
    }, [])

    const clearCart2 = () => {
        dispatch({ type: 'CLEAR_CART' })
            history.push('/list')

    };


    let clickStatus = false;
    





    return (
            <>
            <button onClick={clearCart2} className="btn" > Make Another Order</button>
            

            
            
            {cartList2.map((meat) => {
                return (
                <ul>
                    <li>
                        {meat.meat}
                    </li>
                    <li>
                        {meat.quantity} 
                    </li>
                </ul>
                )
            })}
            
            
            <p>
            
                Name: {receipt.customer_name}
            
                <br />
            
                Item Total:{receipt.total} 

                <br />
                Item(s):{receipt.type}</p>

            


            </>

    )



}


export default Receipt;