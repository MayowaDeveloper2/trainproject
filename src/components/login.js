import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username && password) {
          setLoggedIn(true);
        } else {
          alert('Please enter both username and password.');
        }
    };


    return (
        <>
        <div className="my-modal">
            <form className="BOXX my-bottom-50 down-4 off-4">
                <div className="login-text">LOGIN</div>
                <label>
                    <input className="inputemail down-2"
                    type="text"
                    placeholder="Email address"
                    value={username}
                    onChange={(e) => setUsername (e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail  down-3"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword (e.target.value)}
                    
                    />
                </label>
                <br/>
                <button className="button down-3 centerr" type="button" onClick={handleLogin}>
                    Login to your account
                </button>
            </form>
        </div>
        </>
    )
}

export default Login;