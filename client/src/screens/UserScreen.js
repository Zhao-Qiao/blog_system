import React, {useContext, useState} from 'react'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ContentsWindow from "../components/ContentsWindow";
import {Grid, User} from "@nextui-org/react";
import SearchFriends from "../components/SearchFriends";
import CreateContent from "../components/CreateContent";
import {useLocation} from "react-router-dom";
import {UserContext} from "../App";
function UserScreen() {
    const UserState = useContext(UserContext)
    console.log('UserState',UserState)
    const username = UserState.UserState.username
    console.log('username',username)
    // Components: A nav bar, a side bar, a main functional area and buttons
    const [visible, setVisible] = useState(false)
    const [createContentVisible, setCreateContentVisible] = useState(false)
    const [friends, setFriends] = useState([])
    const [userList, setUserList] = useState([username])
    const display_all = ( )=>{
        console.log('display_all')
        setUserList([username].concat(friends))
    }
    const display_myself = ( )=>{
        console.log('display_myself',username)
        setUserList([username])
    }
    const display_user = (uid) =>{
        console.log('display_user',uid)
        setUserList([uid])
    }
    const handleClick = (e)=>{
        // console.log('props',props)
        setVisible(!visible)
    }
    const handleCreate = (e)=>{
        setCreateContentVisible(!createContentVisible)
    }
    // if user clicked on a friend, then set the userList to [userClicked]
    // userList should be set in UserScreen and can be modified by SideBar, NavBar
    return (
        <div className="UserScreen">
            <NavBar showCreateWindow={handleCreate} display_all={display_all} display_myself={display_myself}/>
            {visible? (<SearchFriends exit={handleClick} />) :
                    createContentVisible ? (<CreateContent exit={handleCreate} username={username}/>) :
                (<div>
            <Grid.Container gap={2}>
                <Grid xs={2} css={{height:"100%"}}>
                    <SideBar handleButton={handleClick} username={username} friends={friends} setFriends={setFriends} display_user={display_user}/>
                </Grid>
                <Grid xs={9} css={{height:"50"}}>
                    <ContentsWindow userList={userList}/>
                </Grid>
            </Grid.Container>
                </div>)

            }
        </div>
    )
}

export default UserScreen