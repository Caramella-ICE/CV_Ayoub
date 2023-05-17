import React from "react";
import photo from "../ressources/img/photo_aaz.png"
import { useEffect } from "react";
import menuIcon from "../ressources/img/menu_reponsive.png"

function SideBar({section}) {



    return ( <div className="sideBar">
      <div className="menu">
          <img src={menuIcon} />
        </div>
      <div className="profile">
        
        <div>
          <img src={photo}/>
        </div>
        <div>
          <h3 style={{maxWidth: "100%"}}>AZZOUZI Ayoub</h3>
          <h6>Fresh graduate Software Engineer</h6>
        </div>
      </div>
        <ul className="nav flex-column flex-sm-column " >
          <li className="nav-item " >
            <a className="nav-link " href="Experience" > Experience</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="Education" > Education </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="Skills" > Skills </a>
          </li>
        </ul>
    </div> );
}

export default SideBar;