import React, {useState} from 'react'
import './login.css'
import amazonlogo from '../../images/Amazon_logo.svg.png'
import {Link , useNavigate} from 'react-router-dom'
import {auth} from '../../firebase'
function Login() {
  const navigate = useNavigate();
  const [email , setEmail ] = useState("");
  const [password , setPassword ] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email , password)
    .then(auth => {
      navigate('/')
    })
    .catch(error => alert(error.message));
  }

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email , password)
    .then((auth)=> {
      console.log(auth);
      if(auth) {
        navigate('/')
      }
    })
    .catch(error => alert(error.message));
  }
  return (
    <div className="login">
      <Link to='/'>
        <img src={amazonlogo} alt="" className="login_image" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form action="submit">
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email address" />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />

            <button className='btn_signin' type='submit' onClick={signIn}>Sign IN</button>
        </form>

        <p>
            By signing in you agree to Amazon Conditions of Use & Sales. Please see our Privacy Notice, Our Cookies Privacy and Our Internet Based Ads Notice.
        </p>

        <button className="register_btn" onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login