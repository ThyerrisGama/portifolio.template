import P from "prop-types"
import React from "react"
import { NavFloatElement } from "./NavFloatElement"
import "../../styles/button_glitch.less"

export const NavFloat = () =>{
    const styleIndex0 = { "--index": 0} as React.CSSProperties;
    const styleIndex1 = { "--index": 1} as React.CSSProperties;
    const styleIndex2 = { "--index": 2} as React.CSSProperties;
    const styleIndexof = { "--stacks": 3} as React.CSSProperties;

    return(
        //set number between 17000 and 20000
        <>
        <NavFloatElement timeout={17000} effectnav="stack" effectName="" styleIndex0={styleIndex0} styleIndex1={styleIndex1} styleIndex2={styleIndex2} styleIndexof={styleIndexof} />
        </>
    )
}