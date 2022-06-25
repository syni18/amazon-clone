import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../../../StateProvider'
import {getBasketTotal} from '../../../Reducer'
import {useNavigate} from 'react-router-dom'
import './subTotal.css'

function SubTotal() {
  const navigate = useNavigate();
  const [{basket} , ]  = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat 
        renderText={(value)=> (
            <>
            <p>
                Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" />This Order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal