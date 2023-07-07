import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';





function Receipt() {

    const dispatch = useDispatch();

    const receipt = useSelector(store => store.receiptReducer)
    console.log(receipt);


    function getReceipt() {
        console.log(receipt);
        dispatch({
            type: 'FETCH_RECEIPT',
            payload: receipt.id
        })

    }

    useEffect(() => {

    }, [])

    const clearCart2 = () => {
        dispatch({ type: 'CLEAR_CART' })
    }


















    return (
        <>

            <button className="btn" onClick={() => getReceipt()}>get receipt</button>
            <button className="btn" onClick={() => clearCart2}>Make Another Order</button>
        </>
    )
}


export default Receipt;