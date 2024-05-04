import P from 'prop-types'
import React from "react";

interface _INavs {
    AboutMeDescription: string | undefined,
    ProjectsDescription: string | undefined,
    ExperienceDescription: string | undefined,
    SkillsDescription: string | undefined,
    ContactDescription: string | undefined,
    effect: string | undefined,
    effectName: string | undefined,
    show: string | undefined,
    styleIndex: React.CSSProperties | undefined,
    styleIndexof: React.CSSProperties | undefined
}

export const AboutMe = (_INavs: any) =>(
        <section className={_INavs.effect} style={_INavs.styleIndexof} >
            <h1 className={_INavs.effectName} style={_INavs.styleIndex} >About-me</h1>
            <p className={_INavs.effectName +" "+ _INavs.show +" "+ _INavs.AboutMeDescription} style={_INavs.styleIndex} >here is a brief presentation about who i am and my goals</p> 
       </section> 
)
AboutMe.prototype = {
    AboutMeDescription: P.string.isRequired,
    effect: P.string.isRequired
}

export const Projects = (_INavs: any) => (
    <section className={_INavs.effect} style={_INavs.styleIndexof} >
        <h1 className={_INavs.effectName} style={_INavs.styleIndex} >Projects</h1>
        <p className={_INavs.effectName +" "+ _INavs.show +" "+ _INavs.ProjectsDescription} style={_INavs.styleIndex}  >Here are listed some personal projects. Aiming to show my skills</p> 
   </section>  
)
Projects.prototype = {
    ProjectsDescription: P.string.isRequired,
    effect: P.string.isRequired
}

export const Experience = (_INavs: any) => (
    <section className={_INavs.effect}  style={_INavs.styleIndexof} >
        <h1 className={_INavs.effectName} style={_INavs.styleIndex} >Experience</h1>
        <p className={_INavs.effectName +" "+ _INavs.show +" "+ _INavs.ExperienceDescription} style={_INavs.styleIndex} >here are my work experiences</p> 
   </section>  
)
Experience.prototype = {
    ExperienceDescription: P.string.isRequired,
    effect: P.string.isRequired
}


export const Skills = (_INavs: any) => (
    <section className={_INavs.effect} style={_INavs.styleIndexof} >
        <h1 className={_INavs.effectName} style={_INavs.styleIndex} >Skills</h1>
        <p className={_INavs.effectName +" "+ _INavs.show +" "+ _INavs.SkillsDescription} style={_INavs.styleIndex} >exemplifying my skills and fluency in programming languages</p> 
   </section>  
)
Skills.prototype = {
    SkillsDescription: P.string.isRequired,
    effect: P.string.isRequired
}

export const Contact = (_INavs: any) => (
    <section className={_INavs.effect}  style={_INavs.styleIndex} >
        <h1 className={_INavs.effectName} style={_INavs.styleIndex} >Contact</h1>
        <p className={_INavs.effectName +" "+ _INavs.show +" "+ _INavs.ContactDescription} style={_INavs.styleIndex} >how to reach me</p> 
   </section>  
)
Contact.prototype = {
    ContactDescription: P.string.isRequired,
    effect: P.string.isRequired
}