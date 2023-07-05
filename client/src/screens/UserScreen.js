import React, {useState} from 'react'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ContentsWindow from "../components/ContentsWindow";
import {Grid} from "@nextui-org/react";
import SearchFriends from "../components/SearchFriends";
import CreateContent from "../components/CreateContent";

function UserScreen() {
    // Components: A nav bar, a side bar, a main functional area and buttons
    const [visible, setVisible] = useState(false)
    const [createContentVisible, setCreateContentVisible] = useState(false)
    const handleClick = (e)=>{
        setVisible(!visible)
    }
    const handleCreate = (e)=>{
        console.log('jhi',visible)
        setCreateContentVisible(!createContentVisible)
    }
    return (
        <div className="UserScreen">
            <NavBar showCreateWindow={handleCreate}/>
            {visible? (<SearchFriends exit={handleClick}/>) :
                    createContentVisible ? (<CreateContent exit={handleCreate}/> ) :
                (<div>
            <Grid.Container gap={2}>
                <Grid xs={2}>
                    <SideBar handleButton={handleClick}/>
                </Grid>
                <Grid xs={9}>
                    <ContentsWindow/>
                </Grid>
            </Grid.Container>
                </div>)

            }
        </div>
    )
}

export default UserScreen