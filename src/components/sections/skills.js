import Rating from "../rating";
import skill from "../../ressources/data/skill.json"


function Skills() {

    let skills=[]
    skill.map((s,i)=>{
        skills.push(
                    <div  key={i} className="skill" data-title={s.skill}>
                        <div className="imgSkill">
                            <img src={s.img}/>
                        </div>
                        
                        <Rating id="#js" rating={s.rating} />
                    </div>
                    )
    })

    return ( <div className="skills">
                {skills}
            </div> );
}

export default Skills;