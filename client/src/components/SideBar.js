import React from 'react'
import {Collapse, Card, Text, Grid, Button} from "@nextui-org/react";
import {AddUser} from "react-iconly";
// import "./SideBar.css"
function SideBar(props) {
    const friendsA = ['123', '234','345', '456']
    const friendsB = ['123', '234','345', '456']
    // side bar display the groups that the user joined in, and displays other members inside the group
    // format: [{group_name: str, members: [id1, id2, ...]}, ...]
    const renderId = (id)=>{
        return (
            <Grid xs={12} css={{bg:'0'}}>
            <Text css={{ta: 'center',m: "0 auto"}}>{id}</Text>
            </Grid>
        )
    }

    return (
            <Collapse.Group accordion={false} className={"SideBar"}>
                <Collapse title={"Friends GroupA"}>
                    <Grid.Container gap={2}>
                    {friendsA.map(friend=>(renderId(friend)))}
                    </Grid.Container>
                </Collapse>
                <Collapse title={"Friends GroupB"}>
                    <Grid.Container gap={2}>
                        {friendsB.map(friend=>(renderId(friend)))}
                    </Grid.Container>
                </Collapse>
                <Button bordered color={"success"} icon={<AddUser set="bold" primaryColor="success"/>} onClick={props.handleButton}>ADD FRIEND</Button>
            </Collapse.Group>

    )
}

export default SideBar