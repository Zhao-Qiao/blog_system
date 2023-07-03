import React, {useEffect, useState} from 'react'
import {Grid, Table, Col, Tooltip, User, Text, Row} from "@nextui-org/react";
import {StyledBadge} from "../components/StyledBadge";
import {IconButton} from "../components/IconButton";
import {EyeIcon} from "../components/EyeIcon";
import {EditIcon} from "../components/EditIcon";
import {DeleteIcon} from "../components/DeleteIcon";

import Axios from "axios";

// Admin Screen 以表格形式显示所有用户的账户信息
// 表格格式： uid | username | type | password | actions(rename, delete, etc.)

// TODO: 为按钮添加对应的动作：修改信息、删除信息等
function AdminScreen() {
    // fetch user info to a list
    const deleteUser = (e)=>{
        return -1
    }
    const editUserInfo = (e)=>{
        return -1;
    }
    const [userList, setUserList] = useState([])
    const columns = [
        {name: "UID", uid: "uid"},
        {name: "USERNAME", uid: "username"},
        {name: "TYPE", uid: "type"},
        {name: "PASSWORD", uid: "password"},
        {name: "ACTIONS", uid: "actions"},
    ]
    const renderCell = (user, columnKey) => {
        console.log('in', user, columnKey)
        const cellValue = user[columnKey]
        switch(columnKey){
            case "uid":
                return (
                    <Text small>{cellValue}</Text>
                );
            case "username":
                return (
                    <User squared name={cellValue} css={{ p: 0 }}>
                        {cellValue}
                    </User>
                );
            case "type":
                return (
                    <StyledBadge type={user.type}>
                        {cellValue}
                    </StyledBadge>
                );
            case "password":
                return (
                    <Text small>{cellValue}</Text>
                );
            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip text="View">
                                <IconButton auto size="small" color="secondary">
                                    <EyeIcon size={20} fill="#979797"/>
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip text="Edit">
                                <IconButton auto size="small" color="warning">
                                    <EditIcon size={20} fill="#979797"/>
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip text="Delete">
                                <IconButton auto size="small" color="error">
                                    <DeleteIcon size={20} fill="#979797"/>
                                </IconButton>
                            </Tooltip>
                        </Col>

                    </Row>
                );
            default:
                return cellValue;
        }
    }
    const fetchUserInfo = (e)=>{
        console.log("FUCK YOU BITCH")
        // e.preventDefault()
        Axios.post('http://localhost:4000/api/fetch_user', {
        }).then((response)=>{
            console.log(response)
            setUserList(response.data)
        })
    }
    useEffect(()=>{
        fetchUserInfo();

    }, [])
    return (
        <div className="AdminScreen">
            <Table aria-label="Example table with custom cells" css={{height:"auto", minwidth:"100%"}} selectionMode="none">
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
                <Table.Body items={userList}>
                    {userList.map(user=>(<Table.Row>{columns.map(col=>(<Table.Cell>{console.log(col.uid)}{renderCell(user,col.uid)}</Table.Cell>))}</Table.Row>))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default AdminScreen