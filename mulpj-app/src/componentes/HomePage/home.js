import React from "react";
import { Link } from "react-router-dom";
import foto from "./image/Rectangle 3.png";
import logo from "../tela de login/image/logo.png"
import rick from "./image/rick.jpg"
import './home.css';


export function HomePage () {
    
    return (
        <header className="header">
            <Link to="/login">Entrar</Link>
            <img className="logo" src={logo}></img><p className="nome">MulpJ</p>
             <img className="fundo" src={foto}></img>
            <h1>Melhor Plataforma de Filmes e series</h1>
                <p className="sexo">Assine por 29,99*</p>
                <p className="desc">Em breve*</p>   
        </header>
    )
    
    
}