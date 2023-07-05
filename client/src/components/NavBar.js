import React from 'react'
import {Avatar, Navbar, Text, Link, Spacer} from "@nextui-org/react";
function NavBar(props) {
    return (
        <div className="NavBar">

            <Navbar shouldHideOnScroll varient="sticky" isBordered isCompact>
                <Navbar.Brand>
                    <Avatar squared text={"F"}/>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight activeColor={"secondary"} hideIn={"xs"} variant={"highlight-rounded"}>
                    <Navbar.Link href={"#"}>i Posted</Navbar.Link>
                    <Navbar.Link href={"#"}>My Friends</Navbar.Link>
                    <Navbar.Link isActive href={"#"}>Son of Bitch</Navbar.Link>
                    <Navbar.Link href={"#"}>Mother Fucker</Navbar.Link>
                    <Navbar.Link href={"#"} onClick={()=>{props.showCreateWindow()}}>Create Content</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Avatar squared text={"Janes"}/>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}

export default NavBar

