import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function Urls(props) {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home {...props}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Urls;