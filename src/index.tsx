import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import "./output.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Analytics from './components/Analytics';
import Ranking from "./components/Ranking";
import LandingPage from "./components/LandingPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<LandingPage/>}></Route>
            <Route path={"/ranking/:id"} element={<Ranking/>}></Route>
            <Route path={"/ranking/:id/analytics/"} element={<Analytics/>}></Route>
        </Routes>
    </BrowserRouter>
);
