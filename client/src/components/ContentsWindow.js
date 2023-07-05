import React, {useEffect, useState, useContext} from 'react'
import ContentCard from "./ContentCard";
import {Grid, Text} from "@nextui-org/react";
import Axios from "axios";
import {UserContext} from "../App";
function ContentsWindow(props) {
    const UserState = useContext(UserContext)
    const {username}  = UserState.UserState
    const {friends} = props
    const [content, setContent] = useState([])
    const {userList} = props
    // userList is set to current user and user he/she follows as default. if a user in the side bar is click, then set userList = [userClicked]
    // fetch contents posted by user and those he/she follows
    const fetch_content = (e)=>{
        Axios.post('http://localhost:4000/api/fetch_content',{
            userlist: userList
        }).then(
            (response)=>{
                console.log(response)
                if(response.data.message){
                    setContent([])
                    return
                }
                else {
                    setContent(response.data)
                }
            }
        )
    }
    useEffect(()=>{
        fetch_content()
    }, [userList])
    const renderCard = (item)=>{
        console.log(item)
        return (
            <Grid xs={12}>
                <ContentCard title={item.title} username={item.username} content={item.content}/>
            </Grid>
        )
    }
    return (
            <Grid.Container gap={2} className={"ContentWindow"}>
                {console.log("content", content)}
                {
                    content?
                    content.map(i=>renderCard(i))
                        : null
                }
            </Grid.Container>
    )
}

export default ContentsWindow