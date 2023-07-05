import React, { useEffect, useState, useRef } from 'react'
import { Card, Dropdown } from "@nextui-org/react";
import { Button, Grid, Input, Loading, Table, Col, Tooltip, User, Text, Row } from '@nextui-org/react';
import Axios from "axios";
// import { HeartIcon } from './HeartIcon';


function SearchFriends(props) {
    const { loginName } = props
    const columns = [
        { name: "NAME", uid: "username" },
        { name: "ACTIONS", uid: "actions" },
    ]
    const menuItems = [
        { key: "follow", name: "Follow" },
        { key: "message", name: "Send Message" },
    ];
    const checkF = (followname) => {//check follow...
        if ({ loginName }.loginName == followname) setCheckFollow(true)
        else {
            Axios.post('http://localhost:4000/api/check_follow', {
                follower: { loginName }.loginName,
                followee: followname
            }).then((response) => {
                console.log(response)
                setCheckFollow(response.data)
            })
        }

        console.log({ loginName }.loginName)
        console.log(followname)
    }
    const setFollow = (followname) => {//check follow...
        Axios.post('http://localhost:4000/api/set_follow', {
            follower: { loginName }.loginName,
            followee: followname
        }).then((response) => {
            console.log(response)
            setCheckFollow(true)
        })
        console.log({ loginName }.loginName)
        console.log(followname)
    }
    const renderCell = (user, columnKey) => {
        console.log('in', user, columnKey)
        const cellValue = user[columnKey]
        switch (columnKey) {
            case "username":
                console.log(1)
                return (
                    <User squared name={cellValue} css={{ p: 0 }}>
                        {cellValue}
                    </User>
                );
            case "actions":
                return (
                    <Dropdown>
                        <Dropdown.Button flat onClick={() => checkF(user["username"])}></Dropdown.Button>
                        <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}
                            disabledKeys={(checkFollow) ? ({ loginName }.loginName == user["username"] ? ["follow", "message"] : ["follow"]) : []}>
                            {(item) => (
                                <Dropdown.Item
                                    key={item.key}
                                    color="default"

                                >
                                    <div onClick={() => setFollow(user["username"])}>{item.name}</div>
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown >
                );
            default:
                console.log(1)
                return cellValue;
        }
    }
    const [searchList, setSearchList] = useState([])
    const [checkFollow, setCheckFollow] = useState(false)
    const strRef = useRef("")
    const fetchSearchInfo = (searchstr) => {
        // e.preventDefault()
        Axios.post('http://localhost:4000/api/search_user', {
            searchstr: searchstr
        }).then((response) => {
            console.log(response)
            setSearchList(response.data)
        })
    }
    useEffect(() => {
        fetchSearchInfo("");
    }, [])
    return (
        <div>
            <Grid.Container gap={4}>
                <Grid>
                    <Input
                        ref={strRef}
                        clearable
                        contentRightStyling={false}
                        placeholder="Search..."
                        contentRight={
                            <Button shadow color="gradient" auto rounded onClick={() => fetchSearchInfo(strRef.current.value)}>
                                {">"}
                            </Button>
                        }
                    />
                </Grid>
            </Grid.Container>
            <Table
                bordered
                shadow={false}
                color="secondary"
                aria-label="Example pagination  table"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                selectionMode="none"
            >
                <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={searchList}>
                    {searchList.map(user => (
                        <Table.Row>
                            {columns.map(col => (
                                <Table.Cell>
                                    {console.log(col.uid)}
                                    {renderCell(user, col.uid)}
                                </Table.Cell>))}
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={7}
                    onPageChange={(page) => console.log({ page })}
                />
            </Table>
            <Button onClick={props.exit}>Confirm</Button>
        </div>

    )
}

export default SearchFriends


