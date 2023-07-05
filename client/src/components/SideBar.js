import React, {useEffect, useState} from 'react'
import {Collapse, Card, Text, Grid, Button} from "@nextui-org/react";
import {AddUser} from "react-iconly";
import Axios from "axios";
// import "./SideBar.css"
function SideBar(props) {
    const friendsA = ['123', '234','345', '456']
    const friendsB = ['123', '234','345', '456']
    const [friends, setFriends] = useState([])
    console.log('username',props.username)
    // side bar display the groups that the user joined in, and displays other members inside the group
    // format: [{group_name: str, members: [id1, id2, ...]}, ...]
    const fetchFriends = (e)=>{
        Axios.post('http://localhost:4000/api/fetch_friends', {
            username: props.username
        }).then(
            (response)=>{
                console.log('your friends:',response)
                setFriends(response.data)
            }
        )
    }
    useEffect(()=>{
        fetchFriends()

    },[])
    const renderId = (id)=>{
        return (
            <Grid xs={12} css={{bg:'0'}}>
            <Text css={{ta: 'center',m: "0 auto"}}>{id}</Text>
            </Grid>
        )
    }

    return (
            <Collapse.Group accordion={false} className={"SideBar"}>
                <Collapse title={"Your Friends"}>
                    <Grid.Container gap={2}>
                    {friends.map(friend=>(renderId(friend)))}
                    </Grid.Container>
                </Collapse>
                {/*<Collapse title={"Friends GroupB"}>*/}
                {/*    <Grid.Container gap={2}>*/}
                {/*        {friendsB.map(friend=>(renderId(friend)))}*/}
                {/*    </Grid.Container>*/}
                {/*</Collapse>*/}
                <Button bordered color={"success"} icon={<AddUser set="bold" primaryColor="success"/>} onClick={props.handleButton}>ADD FRIEND</Button>
            </Collapse.Group>

    )
}

export default SideBar