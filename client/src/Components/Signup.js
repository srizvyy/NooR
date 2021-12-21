import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";

function Signup({setUser}) {

    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '', 
        password: ''
    })

    const navigate = useNavigate()

    function handleSignupFormChange (e) {
        setSignupForm({
            ...signupForm, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmitSignupForm (e) {
        e.preventDefault() 
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: signupForm.username, 
                email: signupForm.email,
                password: signupForm.password
            }) 
        })
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    setUser(data)
                    navigate('/projects')
                })
            }
        })
    }

    return (
        <div className="sign-up-form">
            {/* <AccountCircleIcon id="user-icon"/> */}
            <h1>Sign Up <br /><span id="fill-out-form">Please fill this form to create an account</span></h1>
            <form onSubmit={handleSubmitSignupForm} >
                <input type="username" className="input-box" placeholder="Username" name="username" value={signupForm.username} onChange={handleSignupFormChange}/>
                <input type="email" className="input-box" placeholder="email" name="email" value={signupForm.email} onChange={handleSignupFormChange}/>
                <input type="password" className="input-box" placeholder="Password" name="password" value={signupForm.password} onChange={handleSignupFormChange}/>
                <p> <span><input type="checkbox"/></span> I accept terms and conditions</p>
                <button className="sign-btn">Sign up</button>
                <p>Do you have an account? <Link id="signin-link" to="/login"><a href="#" className="sign-in-btn">Sign in</a></Link></p>
            </form>
        </div>
    )
}

export default Signup
