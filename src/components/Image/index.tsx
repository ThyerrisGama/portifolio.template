import P from 'prop-types'
import React from "react";

interface _Iimage {
    image: string, 
    name: string
}
export const Image = (_Iimage: any): JSX.Element =>{
    return(
    <img src={_Iimage.image} alt={_Iimage.name} className={_Iimage.name} />
    )
}

  