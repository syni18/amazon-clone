import React from 'react'
import {useStateValue} from '../../StateProvider'
import './product.css'
function Product({id, title, image, price, rating}) {
  const [, dispatch]  = useStateValue();
  const addtobasket = ()=> {
    //dispatch the item into datalayer
    dispatch({
      type: 'ADD_TO_BASKET',
      items: {
           id: id, 
           title: title, 
           image: image,
           price: price,
           rating: rating,
          },
    })
  }
  return (
    <div className="product" id={id}>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) =>{
           return <p>⭐</p>;
          })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product