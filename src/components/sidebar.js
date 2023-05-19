import React from "react";
import photo from "../ressources/img/photo_aaz.png"
import { useEffect, useState } from "react";
import menuIcon from "../ressources/img/menu_reponsive.png"
import arrow from  "../ressources/img/arrow_nav.png"
import { useMediaQuery } from 'react-responsive'

function SideBar({section}) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  let [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
      let menuSectionsStyle = document.getElementById("menuSections").style
      let sideBarStyle = document.getElementById("sb").style
      let arrowStyle = document.getElementById("section_arrow").style
      if(isMenuOpen && isTabletOrMobile){
       console.log("ouvert")
       menuSectionsStyle.display = "block"
       sideBarStyle.maxHeight = "300vw"
       arrowStyle.transform = "rotate(0.75turn)"
      }else if(!isMenuOpen && isTabletOrMobile){
        console.log("fermé" )
        menuSectionsStyle.display = "none"
        sideBarStyle.maxHeight = "50vw"
        arrowStyle.transform = "rotate(0.25turn)"
      }
  }, [isMenuOpen])
  



    return ( <div id="sb" className="sideBar">
      <div className="menu" >
          <img src={menuIcon} />
        </div>
        <div id="menuSections">

          <div className="profile">
          
          <div>
            <img src={photo}/>
          </div>
          <div>
            <h3 style={{maxWidth: "100%"}}>AZZOUZI Ayoub</h3>
            <h6>Software Engineer</h6>
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
        </div>
        
        <button className="nav_arrow" onClick={()=>setMenuOpen(!isMenuOpen)}><img id="section_arrow" src={arrow}/></button>
      
    </div> );
}

export default SideBar;

/*

*/