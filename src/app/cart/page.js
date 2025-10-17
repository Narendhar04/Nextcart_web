'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">₹{item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromCart(index))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}