import  { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MeatListItem from '../MeatListItem/MeatListItem';
import CartItem from './CartItem';



function Cart() {

    const cartList = useSelector(store => store.cart);
    const history = useHistory();

    const backButton = () => {
        history.push('/list')
    }












    return (
        <>
        <h1>Your Cart</h1>
        <div>
            <button onClick={backButton}>Back To Shopping</button>
        </div>

        <div>
            {cartList.map(meat => (
                <div>
                <h3><img src={meat.image_url} alt="" /></h3>
                <CartItem meat={meat} key={meat.id}/>
                </div>
                
            ))}
        </div>

        



        

        
        
        </>
    )
}

export default Cart;