import React from "react"


function Header(){

    return (<div className="header">
             
            
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/64/64665.png"/>
                <p>Paris/France</p>
            </div>
            <div>
                <img src="https://www.freeiconspng.com/thumbs/phone-icon/phone-icon-clip-art--royalty--7.png"/>
                <p>+33749341664</p>
            </div>
            <div onClick={()=>window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqtbmHqMbQZksqDbSpHLtwkNdDnVfqcrWDXVCmZBvQwLTXCjzQRVZKHQSwsKszgGQGZkg")} style={{cursor:"pointer"}}> 
                <img  src="https://cdn-icons-png.flaticon.com/512/95/95627.png"/>
                <p>Ayoublines@gmail.com</p>
            </div>
            <div onClick={()=>window.open("https://www.linkedin.com/in/ayoub-azzouzi-3275031b0/")} style={{cursor:"pointer"}}>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"/>
                
            </div>
            <div onClick={()=>window.open("https://github.com/Caramella-ICE")} style={{cursor:"pointer"}}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>

            </div>

            
            
            </div>
            )
}       

export default Header