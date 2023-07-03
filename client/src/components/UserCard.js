import React from 'react'
import {Card} from "@nextui-org/react";
function UserCard(props) {
    // console.log(props)
    return (
        <Card shadow="true" width="300px" height="300px" style={{margin: "10px"}}>
            <Card.Header>
                <h4>{props.userInfo.uid}</h4>
            </Card.Header>
            <Card.Body>
                <div>{props.userInfo.username}</div>
                <div>{props.userInfo.password}</div>
                <div>{props.userInfo.type}</div>
            </Card.Body>
        </Card>

    )
}

export default UserCard