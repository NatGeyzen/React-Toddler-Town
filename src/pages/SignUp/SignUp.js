import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <form>
            <div className="user-information">
                <input type="username" placeholder="Choose a username." className="user-input" />
                <input type="password" placeholder="Choose a password." className="user-input" />     
            </div>
            <button type="submit" className="submit-user-information">Sign up</button>
        </form>
    )
};

export default SignUp;