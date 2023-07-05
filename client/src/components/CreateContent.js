import React, { useEffect, useState, useRef } from 'react'
import { Card, Dropdown } from "@nextui-org/react";
import { Button, Container, Grid, Input, Loading, Table, Col, Tooltip, User, Text, Row, Textarea } from '@nextui-org/react';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
// import { HeartIcon } from './HeartIcon';


function CreateContent(props) {
    const maxWidth = '600px'//在这里调整宽度
    const navigate = useNavigate()
    const { loginName } = props
    const titleRef = useRef("")
    const contentRef = useRef("")
    const submitContent = (title, content) => {
        const currentDate = new Date();
        const formattedTime = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        console.log(formattedTime)
        Axios.post('http://localhost:4000/api/submit_content', {
            username: { loginName }.loginName,
            time: formattedTime,
            title: title,
            content: content
        }).then((response) => {
            console.log(response)

        })
        navigate('/user')
    }
    const cancelSubmit = () => {
        navigate('/user')
    }
    useEffect(() => {
    }, [])
    return (
        <div>
            <Grid.Container gap={4} justify="center" fluid>
                <Grid>
                    <Input
                        ref={titleRef}
                        clearable
                        contentRightStyling={false}
                        placeholder="Maybe a title?"
                        style={{ width: maxWidth }}
                    />
                </Grid>

            </Grid.Container>
            <Grid.Container gap={2} justify="center">
                <Grid>
                    <Textarea
                        ref={contentRef}
                        bordered
                        color="secondary"
                        labelPlaceholder="Write something..."
                        minRows={6}
                        style={{ width: maxWidth }}
                    />
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2} justify="center">
                <Grid>
                    <Button shadow color="secondary" auto rounded onClick={() => {
                        submitContent(titleRef.current.value, contentRef.current.value)
                        props.exit()
                    }}>
                        {"Confirm"}
                    </Button>
                </Grid><Grid>
                    <Button shadow color="error" auto rounded onClick={() => {
                        cancelSubmit()
                        props.exit()
                    }}>
                        {"Cancel"}
                    </Button>
                </Grid>

            </Grid.Container>

        </div>

    )
}

export default CreateContent


