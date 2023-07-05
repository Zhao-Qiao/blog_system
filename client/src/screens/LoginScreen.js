import React, { useContext, useRef } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, useInput, Grid, Button, Text, Spacer, Card } from "@nextui-org/react";
import Axios from "axios";
import './LoginScreen.css'
import { UserContext } from "../App";
function LoginScreen(props) {
    const navigate = useNavigate()
    const UserState = useContext(UserContext)
    const [LoginState, setLoginState] = useState(false) // value: false if not logged in, username if logged in
    const [usertype, setUsertype] = useState(null) // value: 'user' or 'admin' or null if not logged in
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const Login = (e) => {
        // e.preventDefault()
        Axios.post('http://localhost:4000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }).then((response) => {
            console.log(response) //
            if (response.data.message) {
                setLoginState(false)
                setUsertype(null)
            } else {
                props.setUserState({ username: response.data[0].username, uid: response.data[0].uid })
                setLoginState(response.data[0].username)
                setUsertype(response.data[0].type)
                if (response.data[0].type === 'user') {
                    navigate('/user', { state: { username: response.data[0].username, uid: response.data[0].uid } })
                }
                else if (response.data[0].type === 'admin') {
                    navigate('/admin')
                }
                else {
                    // redirect to error page
                    navigate('/ERROR')
                }
            }
        })
        console.log(usernameRef.current.value)
    }
    const register = (e) => {
        // e.preventDefault()

        Axios.post('http://localhost:4000/api/register', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }).then((response) => {
            if (response.data.message) {
                setLoginState(false)
            }
            console.log(response)
        })
        console.log(passwordRef.current.value)
    }
    return (
        <div className="loginScreen">

            <Card isHoverable css={{ mw: "500px" }}>
                <Card.Body>
                    <Grid.Container gap={2} justify='center'>
                        <Text
                            h1
                            size={55}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            }}
                            weight="bold"
                        >
                            Sign In
                        </Text>
                    </Grid.Container>

                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <Input
                                labelLeft="username"
                                color="primary"
                                bordered
                                // placeholder="Enter your password"
                                ref={usernameRef}
                                style={{ width: "200px" }}
                            />
                        </Grid>
                        <Grid>
                            <Input.Password
                                // labelLeft="password"
                                clearable
                                color="primary"
                                type="password"
                                bordered
                                placeholder="Enter your password"
                                ref={passwordRef}
                                style={{ width: "215px" }}
                            />
                        </Grid>

                        <Grid>
                            <Button onClick={Login} color="gradient" ghost>Sign In</Button>
                        </Grid>
                        <Grid.Container gap={2} justify='center'>
                            <Grid>
                                <Spacer y={0.4}></Spacer>
                                <Text
                                    h1
                                    size={15}
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                    }}
                                    weight="bold"
                                >
                                    Haven't got an account?
                                </Text>
                            </Grid>
                            <Grid>
                                <Button onClick={register} color="warning" ghost auto>Sign Up Now</Button>
                            </Grid>
                        </Grid.Container>

                    </Grid.Container>
                </Card.Body>
            </Card>

        </div>

    )
}

export default LoginScreen