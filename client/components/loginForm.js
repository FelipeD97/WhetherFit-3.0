import React, { useState } from "react";

const LoginForm = () => {

    const [state, setState] = useState({
        login_email: "",
        login_password:"",
        isLoggedIn: false
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    };

    const handleClick = () => {
        setState({...state, isLoggedIn: true});
    };

    return (
        <>
            {state.isLoggedIn ? (
                <div>
                    <h2>Welcome</h2>
                </div>
            ) : (
                <form>
                    <label>
                        Email
                        <input
                        type="text"
                        placeholder="email"
                        name="login_email"
                        value={state.email}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                    <input
                        type="text"
                        placeholder="password"
                        name="login_password"
                        value={state.password}
                        onChange={handleChange}
                        />
                    </label>
                    <button onClick={handleClick}>Login</button>
                </form>
            )}
            <style jsx>
                {`
                    textarea {
                        border: 1px solid;
                    }
                `}
            </style>
        </>
    );
};

export default LoginForm;