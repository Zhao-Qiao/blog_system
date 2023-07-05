import React, { useRef } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import './TestPage2.css'
import CreateContent from "../components/CreateContent";

function TestPageQ() {
    return (<div >
        <CreateContent loginName="1" />
    </div>

    )
}

export default TestPageQ