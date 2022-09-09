import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./scss/App.scss";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LogOut from "./components/LogOut";
import Main from "./components/Main";
import MainForm from './components/MainForm';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logOut" element={<LogOut />} />
        <Route path='/main' element={<Main />} />
        {/* <Route path='/dashboard' element={<Dashboard /> } /> */}
        {/* <Route path='/mainForm' element={<MainForm />} /> */}
      </Routes>
  
    </div>
  );
}



export default App;
