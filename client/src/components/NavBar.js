import React, { useContext } from 'react'
import {Avatar, Navbar, Text, Link, Spacer, User, Input, spacer, Dropdown} from "@nextui-org/react";
import { UserContext } from "../App";
function NavBar(props) {
    const {display_myself} = props
    const {display_all} = props
    const UserState = useContext(UserContext)
    const username = UserState.UserState.username
    console.log('2',UserState.UserState.username) // 不知道为啥这个UserState在这里成了一个字典的字典：{UserState:{sssss}}
    return (
        <div className="NavBar">
            <Navbar shouldHideOnScroll varient="sticky" isBordered isCompact>
                <Navbar.Brand css={{ml:"-200" ,pr:"120"}}>
                    <Avatar squared text={"Z"} />
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight activeColor={"secondary"} hideIn={"xs"} variant={"highlight-rounded"} gap={120}>
                    <Navbar.Link href={"#"} onClick={display_myself}>i Posted</Navbar.Link>
                    <Navbar.Link href={"#"} onClick={display_all}>My Friends</Navbar.Link>
                    <Navbar.Link href={"#"} onClick={() => props.showCreateWindow()}>Create Content</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content css={{mr:"-200"}}>
                    <Navbar.Item
                        css={{
                            "@xsMax": {
                                w: "100%",
                                jc: "center",
                            },
                        }}
                    >
                        <Input
                            clearable
                            contentLeftStyling={false}
                            placeholder="Search..."
                        />
                    </Navbar.Item>
                    <Dropdown placement={"bottom-right"}>
                    <Navbar.Item>
                        <Dropdown.Trigger>
                        <Avatar squared text={"Z"} />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                    aria-label={"User menu actions"}
                    color={"secondary"}
                    onAction={(actionKey=> console.log({actionKey}))}>
                        <Dropdown.Item key="profile" css={{ height: "$18" }}>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                {username}
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                            My Settings
                        </Dropdown.Item>
                        <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                        <Dropdown.Item key="analytics" withDivider>
                            Analytics
                        </Dropdown.Item>
                        <Dropdown.Item key="system">System</Dropdown.Item>
                        <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback" withDivider>
                            Help & Feedback
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>

            </Navbar>
        </div>
    )
}

export default NavBar






