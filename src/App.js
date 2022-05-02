import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Main from "./components/main/Main";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/detail" element={<Detail/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
