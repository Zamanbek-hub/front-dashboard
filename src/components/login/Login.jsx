import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const login = event => {
        navigate("/")
    }

    return (
        <section>
            <h1 className='title'>Sign In</h1>
            <form onSubmit={e => { e.preventDefault(); login(e)}}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    required
                />
                <button>Sign In</button>
            </form>
        </section>
    )
}


export default Login
