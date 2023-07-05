import React from 'react'
import {Avatar, Card, Grid, Text} from "@nextui-org/react";

function ContentCard(props) {
    // re-usable component to display user created contents
    // props: username, title, content
    return (
            <Card className="ContentCard">
                <Card.Header>
                    <Avatar squared text={props.username.toUpperCase()[0]}/>
                    <Grid.Container css={{pl:"$6"}}>
                        <Grid xs={12}>
                            <Text css={{lineHeight:"$xs"}}>{props.title}</Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text>{props.username}</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body>
                    <Text>{props.content}</Text>
                </Card.Body>
            </Card>
    )
}

export default ContentCard