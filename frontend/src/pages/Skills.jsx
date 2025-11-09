import { useEffect, useState } from "react"
const Skills = ({ fd ,st}) => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const arr = fd.split(",").map((s) => s.trim());
        setSkills(arr);
    }, [fd])
    return (
        <div style={{...st,color:"red",marginTop:"20px",borderRadius:"20px"}}>
            <h2>Skills</h2>
            {skills.length > 0 ?
                (<div>
                    {skills.map((skill, i) => (
                        <ul>
                            <li key={i}>
                                {skill}
                            </li>
                        </ul>

                    ))}
                </div>) : (<p>You have no skills </p>)
            }
        </div>
    )
}

export default Skills;