import './App.css';
import LoginScreen from "./screens/LoginScreen";
import UserScreen from "./screens/UserScreen";
import TestPage from "./screens/TestPage";
import TestPageQ from "./screens/TestPage2";
import AdminScreen from "./screens/AdminScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import { NextUIProvider } from "@nextui-org/react";
import Axios from "axios";
function App() {
  console.log("HI")
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route path="/user" element={<UserScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/q" element={<TestPageQ />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
