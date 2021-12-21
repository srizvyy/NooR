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
        <>
            <div className="sign-up-form">
                {/* <AccountCircleIcon id="user-icon"/> */}
                <h1>Login <br /><span id="fill-out-form"></span></h1>
                <form onSubmit={submitLoginData} >
                    <input type="email" className="input-box" placeholder="email" name="email" value={loginData.email} onChange={changeLoginData}/>
                    <input type="password" className="input-box" placeholder="Password" name="password" value={loginData.password} onChange={changeLoginData}/>
                    <p> <span><input type="checkbox"/></span> I accept terms and conditions</p>
                    <button className="sign-btn">Login</button>
                    <p>Do you have an account? <Link id="signup-link" to="/signup"><a href="#" className="sign-in-btn">Sign up</a></Link></p>
                </form>
            </div>
        </>
    )
}
        
export default Login

