import React from 'react';
import './css/Login.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
  
  return (
    <section>
      <div className="login-container">
        <h2>LogIn</h2>
        <form className="login-form" action="home.html" method="post">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="custom-control-input" type="text" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="custom-control-input" type="password" name="password" required />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                className="checkbox-remember-me"
                type="checkbox"
                id="remember-me"
                name="remember-me"
                data-parsley-multiple="remember-me"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn-button" type="button">
              LogIn
            </button>
          </div>
        </form>
        {/* <p className="text-p">
          <span className="text-muted">Not a member?</span>
          <Link to='/signup' style={{ color: 'dodgerblue' }}>
            Sign up
          </Link>
        </p> */}
      </div>
    </section>
  );
};

export default Login;
