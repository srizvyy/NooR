import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";

function Login({setUser}) {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    function changeLoginData(e){
        setLoginData({
            ...loginData, 
            [e.target.name]: e.target.value
        })
    }

    function submitLoginData (e) {
        e.preventDefault() 

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(jsonData => {
                    setUser(jsonData)
                    navigate('/projects')
                })
            }
        })
    }

    return (
         <form onSubmit={submitLoginData}>
            <div class="form">
                <div class="title">Welcome Back</div>
                <div class="subtitle">Please Login!</div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder=" " name='email' value={loginData.email} onChange={changeLoginData} />
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Email</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="password" placeholder=" " name='password' value={loginData.password} onChange={changeLoginData} />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Password</label>
                </div>
                <button type="text" class="submit">Login</button>
                <p id='dont-have-account'>Don't have an account? <Link id="signup-link" to="/signup"><a href="#" className="sign-in-btn">Sign up</a></Link></p>
            </div>
        </form>
    )
}
        
export default Login

