import React, { ReactElement, useEffect, useState } from "react"
import handleRandomNumber from "../../utils/handleRandomNumber";
import { AboutMe, Contact, Experience, Projects, Skills } from "../Navegation/Navs"

interface _INavfloat{
    timeout: number | undefined,
    effectnav: string | undefined,
    effectName: string| undefined,
    styleIndex0: {},
    styleIndex1: {},
    styleIndex2: {},
    styleIndexof: {} 
}
export const NavFloatElement = (_INavfloat: any) =>{
    const [ elementNav, setElementNav ]= useState(<></>);
    const [ useTimeout, settimeout ] = useState(_INavfloat.timeout)
    const [ useEffectnav, setEffectnav ]= useState(_INavfloat.effectnav)
    const [ useEffectName , setEffectName ]= useState(_INavfloat.effectName)
    const [ useStyleIndex0, setStyleIndex0 ]= useState(_INavfloat.styleIndex0)
    const [ useStyleIndex1, setStyleIndex1 ]= useState(_INavfloat.styleIndex1)
    const [ useStyleIndex2, setStyleIndex2]= useState(_INavfloat.styleIndex2)
    const [ useStyleIndexof, setStyleIndexof ]= useState(_INavfloat.styleIndexof)
    const [ useview, setview ]= useState(1)
    useEffect(() => {
      
    setTimeout(() => {
    setview(handleRandomNumber(1, 5))
    console.log(useview)
    switch(useview){
        case 1:
            setTimeout(() => {
                setElementNav(<></>)
            }, 15000);
            setElementNav(<>
            <a className="container" href="#">
                <div className={useEffectnav} style={useStyleIndexof} >
                    <div className={useEffectnav + " " + "title"}>
                        <span className={useEffectName} style={useStyleIndex0} >About-me</span>
                        <span className={useEffectName} style={useStyleIndex1} >About-me</span>
                        <span className={useEffectName} style={useStyleIndex2} >About-me</span>
                    </div>
                    <span className={useEffectName } style={useStyleIndex0} >here is a brief presentation about who i am and my goals</span>
                    <span className={useEffectName } style={useStyleIndex1} >here is a brief presentation about who i am and my goals</span>
                    <span className={useEffectName } style={useStyleIndex2} >here is a brief presentation about who i am and my goals</span> 
                </div>
            </a>
            </>) 
            break
        case 2:
            setTimeout(() => {
                setElementNav(<></>)
            }, 15000);
            setElementNav(
            <>
            <a className="container" href="#">
                <div className={useEffectnav} style={useStyleIndexof} >
                    <div className={useEffectnav + " " + "title"}>
                        <span className={useEffectName} style={useStyleIndex0} >Projects</span>
                        <span className={useEffectName} style={useStyleIndex1} >Projects</span>
                        <span className={useEffectName} style={useStyleIndex2} >Projects</span>
                    </div>
                    <span className={useEffectName } style={useStyleIndex0}  >Here are listed some personal projects. Aiming to show my skills</span> 
                    <span className={useEffectName } style={useStyleIndex1}  >Here are listed some personal projects. Aiming to show my skills</span>
                    <span className={useEffectName } style={useStyleIndex2}  >Here are listed some personal projects. Aiming to show my skills</span>  
                </div> 
            </a>
            </>)
            break
        case 3:
            setTimeout(() => {
                setElementNav(<></>)
            }, 15000);
            setElementNav(
                <>
                <a className="container" href="#">
                    <div className={useEffectnav}  style={useStyleIndexof} >
                        <div className={useEffectnav + " " + "title"}>
                            <span className={useEffectName} style={useStyleIndex0} >Experience</span>
                            <span className={useEffectName} style={useStyleIndex1} >Experience</span>
                            <span className={useEffectName} style={useStyleIndex2} >Experience</span>
                        </div>
                        <span className={useEffectName } style={useStyleIndex0} >here are my work experiences</span>
                        <span className={useEffectName } style={useStyleIndex1} >here are my work experiences</span>
                        <span className={useEffectName } style={useStyleIndex2} >here are my work experiences</span> 
                    </div>
                </a>
                </>
            )
            break
        case 4: 
            setTimeout(() => {
                setElementNav(<></>)
            }, 15000);
            setElementNav(
                <>
                <a className="container" href="#">
                    <div className={useEffectnav} style={useStyleIndexof} >
                        <div className={useEffectnav + " " + "title"}>
                            <span className={useEffectName} style={useStyleIndex0} >Skills</span>
                            <span className={useEffectName} style={useStyleIndex1} >Skills</span>
                            <span className={useEffectName} style={useStyleIndex2} >Skills</span>
                        </div>
                        <span className={useEffectName } style={useStyleIndex0} >exemplifying my skills and fluency in programming languages</span> 
                        <span className={useEffectName } style={useStyleIndex1} >exemplifying my skills and fluency in programming languages</span> 
                        <span className={useEffectName } style={useStyleIndex2} >exemplifying my skills and fluency in programming languages</span> 
                    </div>
                </a>
                </>
            )
                break
        case 5:
            setTimeout(() => {
                setElementNav(<></>)
            }, 15000);
            setElementNav(
                <>
                <a className="container" href="#">
                    <div className={useEffectnav}  style={useStyleIndexof} >
                        <div className={useEffectnav + " " + "title"}>
                            <span className={useEffectName} style={useStyleIndex0} >Contact</span>
                            <span className={useEffectName} style={useStyleIndex1} >Contact</span>
                            <span className={useEffectName} style={useStyleIndex2} >Contact</span>
                        </div>
                        <span className={useEffectName } style={useStyleIndex0} >how to reach me</span>
                        <span className={useEffectName } style={useStyleIndex1} >how to reach me</span>
                        <span className={useEffectName } style={useStyleIndex2} >how to reach me</span> 
                    </div>
                </a>
                </>
            ) 
            break
    }
    }, useTimeout);

    return ()=>{
        setElementNav(<></>)
    }
});
    return elementNav
}