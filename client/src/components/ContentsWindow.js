import React, {useEffect, useState} from 'react'
import ContentCard from "./ContentCard";
import {Grid, Text} from "@nextui-org/react";
import Axios from "axios";
function ContentsWindow() {
    const title = "FUCK"
    const username = "zqa123"
    const [content, setContent] = useState([])
    // fetch contents posted by user and those he/she follows
    const fetch_content = (e)=>{
        Axios.post('http://localhost:4000/api/fetch_content',{
            userlist: [username]
        }).then(
            (response)=>{
                console.log(response)
                setContent(response.data)
            }
        )
    }
    useEffect(()=>{
        fetch_content()
    }, [])
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
                {
                    content.map(i=>renderCard(i))
                }
                <Grid xs={12}>
                    <ContentCard title="{item.title}" username="{item.username}" content="{item.content}"/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title="{item.title}" username="{item.username}" content="{item.content}"/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title="{item.title}" username="{item.username}" content="{item.content}"/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title="{item.title}" username="{item.username}" content="{item.content}"/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title="{item.title}" username="{item.username}" content="{item.content}"/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title="{item.title}" username="{item.username}" content="{item.content}"/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title="{item.title}" username="{item.username}" content="{item.content}"/>
                </Grid>

            </Grid.Container>
    )
}

export default ContentsWindow