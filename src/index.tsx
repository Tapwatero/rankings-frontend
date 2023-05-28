import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import "./output.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Analytics from "./components/Analytics";
import Vote from "./Vote";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Vote/>}></Route>
            <Route path={"/analytics"} element={<Analytics/>}></Route>
        </Routes>
    </BrowserRouter>
);
