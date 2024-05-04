import React from "react";
import { Image } from "../../components/Image";
import { Navegation } from "../../components/Navegation";
import { NavFloat } from "../../components/NavFloat";


export const Home = () =>{
    return(
        <header className="Header-container">
            <section className="Home-container">
                <h1 className="logo-text">1023BITS</h1>
                <NavFloat/>
                <Image image ="image.jpg" name= "ok"/>
                <Navegation description="show-message"/>
                <NavFloat/>
            </section>
        </header>
    );
}