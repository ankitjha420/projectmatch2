import React from 'react';


export default function LoginBox() {

    return(
        <div className="LoginBox">

            <h3>Login to use ProjectMatch</h3>

            <img className="googleIcon" 
            src="https://img.icons8.com/color/48/000000/google-logo.png" 
            alt="google icon"/>

            <button className='LoginBoxButton'>
            Login with Google
            </button>

        </div>
    )
}