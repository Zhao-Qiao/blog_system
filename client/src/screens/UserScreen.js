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
    const handleClick = (e)=>{
        // console.log('props',props)
        setVisible(!visible)
    }
    const handleCreate = (e)=>{
        setCreateContentVisible(!createContentVisible)
    }
    return (
        <div className="UserScreen">
            <NavBar showCreateWindow={handleCreate}/>
            {visible? (<SearchFriends exit={handleClick} />) :
                    createContentVisible ? (<CreateContent exit={handleCreate} username={username}/> ) :
                (<div>
            <Grid.Container gap={2}>

                <Grid xs={2} css={{height:"100%"}}>
                    <SideBar handleButton={handleClick} username={username}/>
                </Grid>
                <Grid xs={9} css={{height:"50"}}>
                    <ContentsWindow/>
                </Grid>
            </Grid.Container>
                </div>)

            }
        </div>
    )
}

export default UserScreen