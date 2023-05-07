import React from "react";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Education from "./sections/education";


function Content({section}) {
    let sect ; 
    switch(section){
        case 'Education':
            return ( <div className="content">
                        <Education />
                    </div> );
        case 'Experience':
            return ( <div className="content">
                        <Experience />
                    </div> );
        case 'Skills':
            return ( <div className="content">
                        <Skills />
                    </div> );
        default:
            return ( <div className="content">
                        <Experience />
                    </div> );
    }
    
}

export default Content;