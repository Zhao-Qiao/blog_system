import './App.css';
import LoginScreen from "./screens/LoginScreen";
import UserScreen from "./screens/UserScreen";
import TestPage from "./screens/TestPage";
import TestPageQ from "./screens/TestPage2";
import AdminScreen from "./screens/AdminScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import { NextUIProvider } from "@nextui-org/react";
import {createContext, useContext, useState} from "react";
import Axios from "axios";
export const UserContext = createContext(null)
function App() {
  console.log("HI")
  const [UserState, setUserState] = useState(null)
    console.log('UserState in APP:', UserState)
  // user state records the username and usertype of the user, the function setUserState is used to update the user state, and should only be called by Login Screen, and Admin Screen
  return (
    <NextUIProvider>
      <UserContext.Provider value={{UserState}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginScreen setUserState={setUserState}/>} />
          <Route path="/user" element={<UserScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/q" element={<TestPageQ />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </NextUIProvider>
  );
}

export default App;
