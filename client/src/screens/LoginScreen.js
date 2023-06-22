import React, {useRef} from 'react'
import {useState} from "react";
function LoginScreen() {
    // const [signIn, setSignIn] = useState(false)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const signIn = (e)=>{
        e.preventDefault()
        //sign in to mssql database
        
    }
    const register = (e)=>{
        e.preventDefault()
    }
    return (
        <div className="loginScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email Address" type="email"/>
                <input ref={passwordRef} placeholder="password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="loginScreen_grey">
                        Haven't got an account?
                    </span>
                    <span className="signupScreen_link" onClick={register}> Sign Up Now.</span>
                </h4>
            </form>
        </div>
    )
}

export default LoginScreen