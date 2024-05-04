import React from "react"
import { AboutMe, Contact, Experience, Projects, Skills } from "./Navs"


interface _INavegation {
    description: string,
}
export const Navegation  = (_INavegation:any): JSX.Element => {
    return(
         <nav>
        <ol>
            <li>
                <AboutMe AboutMeDescription = {_INavegation.Description}/>
            </li>
            <li>
                <Projects ProjectsDescription = {_INavegation.Description}/>
            </li>
            <li>
                <Experience ExperienceDescription = {_INavegation.Description}/>
            </li>
            <li>
                <Skills SkillsDescription = {_INavegation.Description}/>
            </li>
            <li>
                <Contact ContactDescription = {_INavegation.Description}/>
            </li>
        </ol>
    </nav>
    )
   
}

