import React from 'react';
import {Route, Routes} from "react-router-dom";
import Testing from "./Screens/Testing";
import Main from "./Screens/Main";
import Development from "./Screens/Development";
import Tools from "./Screens/Tools";
import Skills from "./Screens/Skills";

const Paged = () => {
    return (
        <Routes>
            <Route path='*' exact element={<Main/>}/>
            <Route path='/testing' element={<Testing/>}/>
            <Route path='/development' element={<Development/>}/>
            <Route path='/tools' element={<Tools/>}/>
            <Route path='/skills' element={<Skills/>}/>
        </Routes>
    );
};

export default Paged;