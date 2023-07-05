import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MeatListItem from '../MeatListItem/MeatListItem';
import CartItem from './CartItem';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Cart() {

    const cartList = useSelector(store => store.cart);
    const history = useHistory();
    // const grandTotal = (cartList.reduce((accum, item) => accum + Number(item.price).toFixed(2) * Number(item.quantity), 0), [cartList]);
    const [grandTotal, setGrandTotal] = useState(cartList.reduce((accum, item) => accum + Number(item.price).toFixed(2) * Number(item.quantity), 0), [cartList])
    const dispatch = useDispatch();
    const backButton = () => {
        history.push('/list')
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const receipt = () => {
        
    }

    useEffect(() => {
        dispatch({
            type: 'UPDATE_GRANDTOTAL',
            payload: {
                grandTotal,
            }
        })
    }, []);


    const checkout = () => {
        let meatArray = [];
        cartList.map(meat => (
            meatArray.push({
                id: meat.id,
                quantity: meat.quantity
            })
        ))
        dispatch({ type: 'POST_ORDERS', payload: { meats: meatArray, total: grandTotal } })

    };
    console.log(cartList);


    return (
        <>
            <h1>Your Cart</h1>
            <div>
                <button onClick={backButton} className="btn">Back To Shopping</button>
            </div>

            <div>
                {cartList.map(item => (
                    <div>
                        <h3><img src={item.image_url} alt="" /></h3>
                        <CartItem item={item} key={item.id} />
                    </div>

                ))}
                <h1>Grand Total:  ${grandTotal}</h1>
            </div>

            <div>
                <button onClick={clearCart} className="btn">CLEAR</button>
            </div>
                    <br />
            <div>
                <button className="btn" onClick={checkout}>CHECKOUT</button>
            </div>










        </>
    )
}

export default Cart;