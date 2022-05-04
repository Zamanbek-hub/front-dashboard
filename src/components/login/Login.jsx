import React from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const LOGIN_API = '/authentication/token'
    const navigate = useNavigate();

    const login = event => {
        const loginData = {
            username: event.target[0].value,
            password: event.target[1].value,
        }

        axios.post(LOGIN_API, loginData)
            .then(res => {
                localStorage.setItem('jwtToken', res['data']['access_token']);
                localStorage.setItem('username', loginData.username);
                navigate("/");
            }).catch(err=> {
            console.log(err);
            alert("Invalid username or login");
        })
    }

    return (
        <div className='header_div'>
            <div className="wrapper">
                <form className="form-signin" onSubmit={e => { e.preventDefault(); login(e)}}>
                    <h2 className="form-signin-heading">Dashboard</h2>
                    <input type="text" className="form-control login-custom-input mb-3" name="username" placeholder="username" required autoFocus=""/>
                    <input type="password" className="form-control login-custom-input" name="password" placeholder="password" required/>
                    <button className="btn btn-lg btn-primary btn-block login_btn" type="submit">Sign in</button>
                </form>
            </div>
            {/*<section>*/}
            {/*    <h1 className='title'>Sign In</h1>*/}
            {/*    <form onSubmit={e => { e.preventDefault(); login(e)}}>*/}
            {/*        <label htmlFor="username">Username:</label>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            id="username"*/}
            {/*            autoComplete="off"*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <label htmlFor="password">Password:</label>*/}
            {/*        <input*/}
            {/*            type="password"*/}
            {/*            id="password"*/}
            {/*            required*/}
            {/*        />*/}
            {/*        <button>Sign In</button>*/}
            {/*    </form>*/}
            {/*</section>*/}
        </div>
    )
}


export default Login
