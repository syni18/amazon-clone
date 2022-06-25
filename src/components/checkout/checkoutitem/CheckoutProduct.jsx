import React from 'react'
import {useStateValue} from '../../../StateProvider'
import './checkoutProduct.css'
function CheckoutProduct({id, title, image, price, rating , hideButton}) {

  const [ , dispatch]  = useStateValue();

  const removeItem = () => {
    //remoce product from the basket
    dispatch({
      type: 'REMOVE_ITEM_BASKET',
      id: id, 
          
    })
  }
  return (
    <div className="checkout_product">
      <img src={image} alt="" className="checkoutProduct_image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="btn_primary">
          {!hideButton && <button onClick={removeItem}>Remove item</button>}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct