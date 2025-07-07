import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  //remove button functionality//
  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}

export default CartItem;