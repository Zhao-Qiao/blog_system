import './App.css';
import LoginScreen from "./screens/LoginScreen";
import UserScreen from "./screens/UserScreen";
import AdminScreen from "./screens/AdminScreen";
import {BrowserRouter, Route, Routes, withRouter} from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";

function App() {
    console.log("HI")
  return (
      // // <div className="App">
      //     <LoginScreen/>
      // // {/*</div>*/}
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LoginScreen/>}/>
            <Route path="/user" element={<UserScreen/>}/>
            <Route path="/admin" element={<AdminScreen/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
