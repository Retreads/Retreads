import React from "react";

const Login = () => {

    return (
        <div className="login">
            <div className="form-container">
                <img src="" alt="" />

                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for you account</p>

                <form action="/" className="form">

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="***********" className="input input"/>

                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );

}

export default Login;