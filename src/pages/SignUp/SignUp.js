import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {

    const [ username, set_username ] = useState(''); 
    const [ username_message, set_username_message ] = useState('');
    const [ message_class, set_message_class ] = useState('input-message');
    const [ password_message, set_password_message ] = useState('');


    const usernameHandler = (e) => {
        set_username(e.target.value);
    }

    const usernameVerification = () => {
        if (username) {
            set_username_message('Just making sure that username will be unique to you ...');
            set_message_class('input-message task-ongoing');
            
        } else {
            set_username_message('Oops, looks like you skipped the username and we really need that.');
            set_message_class('input-message error');
        }
    }

    return (
        <div className="user-authentication">
            <form>
                <input 
                    id="username-input"
                    onChange={usernameHandler}
                    type="username" 
                    placeholder="username" 
                    className="user-input" 
                    autoFocus 
                    autoComplete="off" />
                <p id="username-message" className={message_class}> {username_message} </p>
                <input 
                    id="password-input"
                    onSelect={usernameVerification}
                    type="password" 
                    placeholder="password" 
                    className="user-input" />     
                <p id="password-message" className={message_class}> {password_message} </p>
                <button type="submit" className="submit-user-information">Sign up</button>
                
            </form>
         </div>
    )        
};

export default SignUp;