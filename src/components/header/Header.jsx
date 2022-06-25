import React from 'react'
import './header.css'
import Logo from '../../images/amazon.png'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider'
import { auth } from '../../firebase';
function Header() {

  const [{basket, user} ,  ] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="" className="header_logo" />
      </Link>
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search Products..."
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link style={{ textDecoration: "none" }} to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_options">
            <span className="header_option_one">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header_option_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="header_options">
            <span className="header_option_one">Returns</span>
            <span className="header_option_two">& Orders</span>
          </div>
        </Link>
        <div className="header_options">
          <span className="header_option_one">Your</span>
          <span className="header_option_two">Prime</span>
        </div>
        <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_option_two header_BasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header