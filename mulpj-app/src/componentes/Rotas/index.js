import React from "react";
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import { Cadastro } from "../tela de cadastro/cadastro";
import { Login } from "../tela de login/login";
import { TelaPrincipal } from "../Tela Principal";
import { HomePage } from "../HomePage/home";

export default function rota () {
    return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path ="/home" element={<TelaPrincipal/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
    )
}
