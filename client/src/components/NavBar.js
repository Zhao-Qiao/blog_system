import React, {useContext} from 'react'
import {Avatar, Navbar, Text, Link, Spacer, User} from "@nextui-org/react";
import {UserContext} from "../App";
function NavBar(props) {
    const UserState = useContext(UserContext)
    const {display_myself} = props
    const {display_all} = props
    console.log('2',UserState.UserState.username) // 不知道为啥这个UserState在这里成了一个字典的字典：{UserState:{sssss}}
    return (
        <div className="NavBar">
            <Navbar shouldHideOnScroll varient="sticky" isBordered isCompact>
                <Navbar.Brand>
                    <Avatar squared text={"Z"}/>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight activeColor={"secondary"} hideIn={"xs"} variant={"highlight-rounded"} gap={120}>
                    <Navbar.Link href={"#"} onClick={display_myself}>i Posted</Navbar.Link>
                    <Navbar.Link href={"#"} onClick={display_all}>My Friends</Navbar.Link>
                    <Navbar.Link href={"#"} onClick={()=>props.showCreateWindow()}>Create Content</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Avatar squared text={"Z"}/>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}

export default NavBar

