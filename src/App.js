import React , {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from "./firebase";
import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'
import Login from './components/login/Login'
import Payment from './components/payment/Payment'
import Orders from './components/orders/Orders'
import {useStateValue} from './StateProvider'
import {loadStripe } from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe(
  "pk_test_51LDB0lSENQKmhKDIHcz1iVwu0bnQtbCIiW0C6HfJHuOZ8KHyMlxNYmC7tZtPIgVQKC0RHJiJbTm0wsOMvB6numid00aBrVO4Za"
);
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //run onces when the app components loads...
    auth.onAuthStateChanged(authUser => {
      console.log("the user is ..." , authUser);

      if(authUser) {
        //user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        ///user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/payment"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            }
          />
          <Route path="/orders" element={
            <div>
              <Header />
              <Orders />
            </div>
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
