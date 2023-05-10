import React from "react";
import data from "../../ressources/data/education.json"


function Education() {


    let educations=[]
    data.map((d,i)=>{
        educations.push(<div key={i} className="chronoSection">
        <div className="timeDiv">
            {d.date}
        </div>
        <div className="timeSection">
            <h3>{d.title}</h3>
            <h5><img  style={{width:'1.5%', marginRight: "3%"}} src="https://cdn-icons-png.flaticon.com/512/64/64665.png"/>{d.location}</h5>
            <p>{d.description}</p>
            <div className="ressourcesSection">
                <img src={d.img} />
                <div>
                    <div>
                        <a href={d.href} target="_blank">Learn more
                            <img  style={{width:'10%'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAAB8fHzz8/NFRUU6Ojp+fn729vZ6enpCQkL4+Pje3t77+/vZ2dlAQEA8PDxLS0sICAhhYWGSi1RcAAADb0lEQVR4nO2cC3KDMBBD4/5TSn/3P2xJSjOhKGB7ksHS6h2gg8Zar5Yl3e2uQPf5fI0/0y59Sg/3Wz/ELem/Ukr7160f43Z06cjH29YPcitGgSm9ixq1Tyc0a7FLZygadSIwpUe566ZP/9iLGfXYJqY8SLX+bqbvYFShWoQCh+tG5hRnNajWNC4KHFq/xI16waKjUQUkLpzgAf6msSKQv2ksWnQ0KnXTyBA49EXiU1y16GhU2lrMFMg79WdZdDQqZS0WCByuG0KjZlv0F75aLBQ4BDgyoxYLpAtwT+UK2QLcXYVEsgD3UiHxceuHLqPGqGQBrsqo+rVIFuBqJJINUzW1SLa2cS1CAhiVbG1TdaPqG9UBrjUCBLiaUwzQNCIEOC6JDnAQsqbhAAchaxoBJo2ql4xcN2rNKZKtbWpOkWxt4wAHIVvbVBmV67rx2gZCFuA89WOJXKfoAAcJEOACDFMRpn59iQECnNc2reEAB3GAaw1P/ZAIAY5LogMcJEAtBpg0yJqGjYol6p+i1zat4QAHIfu5tNc2EE/9reGpH0vkOsUAAc5rG0iAAOepvzW8toGQBTivbSAOcK3hAAcJ0DQCBLgAb8Md4FrDRoX4u5vWCBDgPPVDyP7LbYC1TVXr57pR3yskfm/90CXIn6F8HcrfpfL9UD7TyOdS+dlCfj6Un/Hl39PYogCq96WuQQDV3kJ+9+SoBpCPalR7fPlvMdwm0AkyCZSf6OW/TXQNAhzVWkI+qsn/3sJRDeDlS0t4+QKgimrybcJRDUAV1fxmGyBvUfmJXj6qUU30jmoAqjbhiR4gH9XkJ3r572S8fGkJRzUA1TTh5QtAvgYd1VpCPqp5+QKQn+ipoponegDVP3/08gXgqNYS8lFNflxyVAPoT/TqtyhVm3BUA1C1CU/0AKo24eULQH75oh/V1C2qH9XULUoV1VyDAEe1lpCPavLLl11fLpBqot9VSKRavhwplEjVJka6EoFUy5cTBRKpli9nZBuVKqpNyJTIWIN/ZBmVKqrNyJBINS4BVo1KFdUgKxK5ohpm0ahsUQ2zcIpUP1Je4KJE5jYx5YJRqX6kvAKUyBrVMP3X3KJCJ3hgVosKbWLKP6NSLV8ymUhkj2qYM6PqtIkpp1OkWr4U0Slb9Jdj0+Cd6HPodWvwj+6z4Ub/A9U8OoRlmCrZAAAAAElFTkSuQmCC" />
                        </a>
                    </div>  
                </div>
            </div>
            { i != data.length -1 ? <hr style={{margin:'0',padding:'0'}} /> : <></>}
        </div>
        
    </div>)
    })
    return ( <div className="education">
        {educations}
    </div> );
}

export default Education;