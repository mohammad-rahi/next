import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delCart } from '../redux/actions';

const Cart = () => {
    const state = useSelector(state => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item));
    };

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn btn-close float-end" area-label='Close' onClick={() => handleClose(cartItem)}></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.titile} height="200px" width="100px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.titile}</h3>
                            <p className='lead fw-bold'>{cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='cart'>
            {
                state.length > 0 ? state.map(cartItems) : <>
                    <div className="px-4 my-5 bg-light rounded-3">
                        <div className="container py-4">
                            <div className="row align-items-center">
                                <h1>Yout Cart is Empty</h1>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart