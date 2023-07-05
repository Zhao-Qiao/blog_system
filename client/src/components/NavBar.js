import React, {useContext} from 'react'
import {Avatar, Navbar, Text, Link, Spacer, User} from "@nextui-org/react";
import {UserContext} from "../App";
function NavBar(props) {
    const UserState = useContext(UserContext)
    const test= true
    console.log('1',UserState)
    console.log('2',UserState.UserState.username) // 不知道为啥这个UserState在这里成了一个字典的字典：{UserState:{sssss}}
    return (
        <div className="NavBar">
            <Navbar shouldHideOnScroll varient="sticky" isBordered isCompact>
                <Navbar.Brand>
                    <Avatar squared text={"Z"}/>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight activeColor={"secondary"} hideIn={"xs"} variant={"highlight-rounded"}>
                    <Navbar.Link href={"#"}>i Posted</Navbar.Link>
                    <Navbar.Link href={"#"}>My Friends</Navbar.Link>
                    <Navbar.Link isActive href={"#"}>Son of Bitch</Navbar.Link>
                    <Navbar.Link href={"#"}>Mother Fucker</Navbar.Link>
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

