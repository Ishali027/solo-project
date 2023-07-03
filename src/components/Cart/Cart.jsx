import  { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MeatListItem from '../MeatListItem/MeatListItem';
import CartItem from './CartItem';
import { useMemo } from 'react';



function Cart() {
    const cartList = useSelector(store => store.cart);
    const history = useHistory();
    const grandTotal = useMemo(() => cartList.reduce((accum, item) => accum + Number(item.price) * Number(item.quantity), 0), [cartList]);

    const backButton = () => {
        history.push('/list')
    }

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
                <CartItem item={item} key={item.id}/>
                </div>
                
            ))}
            <h1>Grand Total:  {grandTotal}</h1>
           
        </div>

        



        

        
        
        </>
    )
}

export default Cart;