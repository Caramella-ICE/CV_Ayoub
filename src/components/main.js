
import Content from "./content";
import SideBar from "./sidebar";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {


    function mainPage(sec){
        return (<div>
                    <SideBar  section = {sec} />
                    <Content  section = {sec} />
                </div>
        )
    }

    return ( <div className="main">
        
        <BrowserRouter>
      <Routes>
        <Route path="/*" element={mainPage("Experience")}></Route>
        <Route path="/Experience" element={mainPage("Experience")}></Route>
        <Route path="/Education" element={mainPage("Education")}></Route>
        <Route path="/Skills" element={mainPage("Skills")}></Route>
      </Routes>
    </BrowserRouter>
        
    </div> );
}

export default Main;