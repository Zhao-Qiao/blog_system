import React, { useRef } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import './TestPage.css'
import SearchFriends from "../components/SearchFriends";

function TestPage() {
    return (<div >
        <SearchFriends loginName="1" />
    </div>

    )
}

export default TestPage