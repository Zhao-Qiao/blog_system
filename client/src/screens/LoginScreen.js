import React, {useRef} from 'react'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Axios from "axios";
import './LoginScreen.css'
function LoginScreen(props) {
    console.log(props)
    const navigate = useNavigate()
    const [LoginState, setLoginState] = useState(false) // value: false if not logged in, username if logged in
    const [usertype, setUsertype] = useState(null) // value: 'user' or 'admin' or null if not logged in
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const Login = (e)=>{
        e.preventDefault()
        Axios.post('http://localhost:4000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }).then((response)=>{
            console.log(response) //
            if(response.data.message){
                setLoginState(false)
                setUsertype(null)
            }else{
                setLoginState(response.data[0].username)
                setUsertype(response.data[0].type)
                if(response.data[0].type === 'user'){
                    navigate('/user')
                }
                else if(response.data[0].type === 'admin'){
                    navigate('/admin')
                }
                else{
                    // redirect to error page
                    navigate('/ERROR')
                }
            }
        })
        console.log(usernameRef.current.value)
    }
    const register = (e)=>{
        e.preventDefault()

        Axios.post('http://localhost:4000/api/register', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }).then((response)=>{
            if(response.data.message){
                setLoginState(false)
            }
            console.log(response)
        })
        console.log(passwordRef.current.value)
    }
    return (
        <div className="loginScreen">
            <form className="loginForm">
                <div className="title">Sign In</div>
                <input ref={usernameRef} placeholder="user_name" type="text" className="inputBox"/>
                <input ref={passwordRef} placeholder="password" type="password" className="inputBox"/>
                <button type="submit" onClick={Login} className="loginBotton">Sign In</button>

                <h4 className="prompt">
                    <span className="promptText">
                        Haven't got an account?
                    </span>
                    <span className="signUpBotton" onClick={register}> Sign Up Now.</span>
                </h4>
            </form>
        </div>
    )
}

export default LoginScreen