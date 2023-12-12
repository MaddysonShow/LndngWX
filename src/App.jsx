import React, {useState} from "react";
import Main from "./pages/Main/Main";
import Page404 from "./pages/Page404/Page404";
import {BrowserRouter, Route, Router, RouterProvider, Routes} from "react-router-dom";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<Main/>}/>
            {/*<Route path='*' element={<Page404/>}/>*/}
        </Routes>
    </BrowserRouter>)
}

export default App;
