import React, { Component } from 'react';
import '../css/projecthomepage.css';
import { callApi } from '../api';

export class Projecthomepage extends Component {
  constructor(){
    super();
    this.userRegistration = this.userRegistration.bind(this);
  }

  showSignin() {
    let popup = document.getElementById('popup');
    let signin = document.getElementById('signin');
    let signup = document.getElementById('Signup');
    let popupHeader = document.getElementById('popupHeader');
    popupHeader.innerHTML = 'Login';
    signin.style.display = 'block';
    signup.style.display = 'none';
    popup.style.display = 'block';
  }

  showSignup() {
    let popup = document.getElementById('popup');
    let signin = document.getElementById('signin');
    let signup = document.getElementById('Signup');
    let popupHeader = document.getElementById('popupHeader');
    popupHeader.innerHTML = 'Signup';
    signin.style.display = 'none';
    signup.style.display = 'block';
    popup.style.display = 'block';
  }

  closeSignin(event) {
    if (event.target.id === 'popup') {
      let popup = document.getElementById('popup');
      popup.style.display = 'none';
    }
  }
  userRegistration()
  {
        let fullname = document.getElementById("fullname");
        let email = document.getElementById("email");
        let role = document.getElementById("role");
        let  signuppassword = document.getElementById("signuppassword");
        let confirmpassword = document.getElementById("confirmpassword");

        fullname.style.border = "";
        email.style.border = "";
        role.style.border = "";
        signuppassword.style.border = "";
        confirmpassword.style.border = "";
        if(fullname.value=="")
        {
          fullname.style.border = "1px solid red";
          fullname.focus();
          return;
        }
        if(email.value=="")
          {
            email.style.border = "1px solid red";
            email.focus();
            return;
          }
          if(role.value=="")
            {
              role.style.border = "1px solid red";
              role.focus();
              return;
            }
            if(signuppassword.value=="")
              {
                signuppassword.style.border = "1px solid red";
                signuppassword.focus();
                return;
              }
              if(confirmpassword.value=="")
                {
                  confirmpassword.style.border = "1px solid red";
                  confirmpassword.focus();
                  return;
                }
                if(signuppassword.value !== confirmpassword.value)
                {
                  signuppassword.style.border = "1px solid red";
                  signuppassword.focus();
                  return;
                }

  


        var data = JSON.stringify({
              fullname : fullname.value,
              email : email.value,
              role : role.value,
              password : signuppassword.value
        })
        callApi("POST", "http://localhost:8080/users/signup", data, this.getResponse)
  }
  getResponse(res){
    let resp = res.split('::');
    alert(resp[1]);
    if (resp[0] === "200")
      {
          let signin = document.getElementById("signin");
          let signup = document.getElementById("signup");
          signin.style.display = "block";
          signup.style.display = "none";
      }
  }

  render() {
    return (
      <div className='page-container'>
        {/* Popup */}
        <div id='popup' onClick={this.closeSignin.bind(this)}>
          <div className='popupwindow'>
            <div id='popupHeader' className='popupHeader'>
              Login
              <span
                className="close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('popup').style.display = 'none';
                }}
              >
                ×
              </span>
            </div>
            <div id='signin' className='Signin'>
              <label className='usernameLabel'>Username:</label>
              <input type='text' id='usernameInput' />
              <label className='passwordLabel'>Password:</label>
              <input type='password' id='passwordInput' />
              <div className='forgotPassword'><label>Forgot Password?</label></div>
              <button className='signinButton'>Sign In</button>

              <div className='div1'></div>
              <div className='div2'></div>

              Don't have an account?
              <div id='signup' onClick={this.showSignup.bind(this)}>Sign Up</div>
              <label onClick={this.showSignup.bind(this)}>SIGN UP NOW</label>
            </div>
            <div id='Signup'>
              <label >Full Name:</label>
              <input type='text' id='fullname' />
              <label >Email:</label>
              <input type='email' id='email' />

              <select id='role'>
                <option value=''></option>
                <option value='1'>Admin</option>
                <option value='2'>Employer</option>
                <option value='3'>Job Seeker</option>
              </select>

              <label>Password:</label>
              <input type='password' id='signuppassword' />
              <label>Confirm Password: </label>
              <input type='password' id='confirmPassword' />
              <button onClick={this.userRegistration} >Register Now</button>

              <div>Already have an account? <span onClick={this.showSignin}>SIGN IN</span></div>

            </div>
          </div>
        </div>

        {/* Header */}
        <div className="header">
          <div id='logo1'>
            <img id='image1' src="/images/logo.png" alt="Logo" />
          </div>
          <div id='title'>
            <h2>KL JOB PORTAL</h2>
          </div>
          <div id='signin' onClick={this.showSignin.bind(this)}>
            <img id='image3' src="/images/user.png" alt="Logo" />
            <h4 id='signin1'>Sign In</h4>
          </div>
          <div id='Register' onClick={this.showSignup.bind(this)}>
            <img id='image3' src="/images/user.png" alt="Logo" />
            <h4 id='Register1'>Register</h4>
          </div>
        </div>

        {/* Search */}
        <div className="search-container">
          <div className="searchbar">
            <div className="search-input-group">
              <button className="search-button">Search</button>
              <input type="text" placeholder="Search for jobs" id='search' />
              <input type="text" placeholder="Location" id='location' />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='Content'>
          <div className='hero-section'>
            <div className='text1'>Get started with us by now the best career guidance to all</div>
            <div className='text2'>Make your dream success</div>
            <div className='text3'>Good career</div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <div className="footer-text">
              <p>Created by Shubham 2300032645</p>
              <p className='copyrightText'>Copyright ©️ Shubham - KL University. All rights reserved</p>
            </div>
            <div className="social-icons">
              <img className='socialmedialIcon' src='./images/facebook.png' alt="Facebook" />
              <img className='socialmedialIcon' src='./images/linkedin.png' alt="LinkedIn" />
              <img className='socialmedialIcon' src='./images/twitter.png' alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projecthomepage;