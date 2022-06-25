import React from 'react'
import './checkout.css'
import AmazonAds from '../../images/amazonads.png'
import SubTotal from '../checkout/subtotal/SubTotal'
import CheckoutProduct from '../checkout/checkoutitem/CheckoutProduct'
import {useStateValue} from '../../StateProvider'
function Checkout() {
  const [{basket, user} , ]  = useStateValue();
  return (
    <>
      <img src={AmazonAds} alt="" className="checkout_ads" />
      <div className="checkout">
        <div className="checkout_left">
          <div>
            <h4>Hello, {user?.email}</h4>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map((items) => (
              <CheckoutProduct
                id={items.id}
                title={items.title}
                image={items.image}
                price={items.price}
                rating={items.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout_right">
          <SubTotal />
        </div>
      </div>
    </>
  );
}

export default Checkout