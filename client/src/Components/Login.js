import React from 'react'

function Login() {
    return (
       <div className="sign-up-form">
            {/* <AccountCircleIcon id="user-icon"/> */}
            <h1>Login <br /><span id="fill-out-form"></span></h1>
            <form /*onSubmit={newUserSubmitHandler}*/ >
                <input type="email" className="input-box" placeholder="email" name="email" /*value={newUser.email} onChange={newUserChangeHanldler}*//>
                <input type="password" className="input-box" placeholder="Password" name="password" /*value={newUser.password} onChange={newUserChangeHanldler}*//>
                <p> <span><input type="checkbox"/></span> I accept terms and conditions</p>
                <button className="sign-btn">Login</button>
                <p>Do you have an account? <a href="#" className="sign-in-btn">Sign up</a></p>
            </form>
        </div>
    )
}

export default Login
