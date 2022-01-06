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
        <form onSubmit={handleSubmitSignupForm}>
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let's create your account!</div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" name='username' type="text" placeholder=" " value={signupForm.username} onChange={handleSignupFormChange} />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Username</label>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder=" " name='email' value={signupForm.email} onChange={handleSignupFormChange} />
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Email</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="password" placeholder=" " name='password' value={signupForm.password} onChange={handleSignupFormChange} />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Password</label>
                </div>
                <button type="text" class="submit">Create Account</button>
                <p id='do-you-account'>Do you have an account? <Link id="signin-link" to="/login"><a href="#" className="sign-in-btn">Log in</a></Link></p>
            </div>
        </form>
    )
}

export default Signup
