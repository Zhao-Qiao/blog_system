import React from 'react'
import ContentCard from "./ContentCard";
import {Grid, Text} from "@nextui-org/react";
function ContentsWindow() {
    const title = "FUCK"
    const username = "zhaoqiao"
    const content = "FUCK DATABASE"
    return (

            <Grid.Container gap={2} className={"ContentWindow"}>
                <Grid xs={12}>
                    <ContentCard title={title} username={username} content={content}/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title={title} username={username} content={content}/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title={title} username={username} content={content}/>
                </Grid>
                <Grid xs={12}>
                    <ContentCard title={title} username={username} content={content}/>
                </Grid>
            </Grid.Container>
    )
}

export default ContentsWindow