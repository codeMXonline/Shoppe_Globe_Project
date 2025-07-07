
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();
 //Importing thumbnail//
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="details">
        <h3>{product.title}</h3>
        <p>₹{product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
