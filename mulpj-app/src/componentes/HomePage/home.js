import React from "react";
import { Link } from "react-router-dom";
import logo from "../tela de login/image/logo.png"
import rick from "./image/rick.jpg"
import inter from "./image/inter.jpg"
import hobbit from "./image/hobbit.jpg"
import mad from "./image/mad.jpg"
import './home.css';


export function HomePage () {
    let time = 2000,
        currentImageIndex = 0,
        images = document.querySelectorAll("#imgs img"),
        max = images.length;
            console.log(images)
        function nextImage (){
            images[currentImageIndex].classList.remove("selected")
            currentImageIndex++
            if (currentImageIndex >= max){
                currentImageIndex = 0
            }
                images[currentImageIndex].classList.add("selected")
        }
        function start (){
         setInterval(() => {
                nextImage ()
         }, time)
        }

        window.addEventListener("load", start)

    return (
        <header className="header">
            <Link to="/login">Entrar</Link>
             <img className="logo" src={logo}></img><p className="nome">MulpJ</p>
            <div className="img" id="imgs">
                <img className="selected" src={mad}></img>
                <img  src={rick}></img>
                <img  src={inter}></img>
                <img  src={hobbit}></img>
            </div>
            <h1>Melhor Plataforma de Filmes e series</h1>
                <p className="sexo">Assine por 29,99*</p>
                <p className="desc">Em breve*</p>   
        </header>
    )
    
    
}