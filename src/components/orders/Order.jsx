import React from 'react'
import './order.css'
import moment from 'moment'
import CheckoutProduct from "../checkout/checkoutitem/CheckoutProduct";
import CurrencyFormat from 'react-currency-format'
function Order({paid}) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(paid.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order_id">
        <small>{paid.id}</small>
      </p>
      {paid.data.basket?.map((items) => (
        <CheckoutProduct
          id={items.id}
          title={items.title}
          image={items.image}
          price={items.price}
          rating={items.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={paid.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order