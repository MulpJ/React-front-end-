import React from "react";
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import { Cadastro } from "../tela de cadastro/cadastro";
import { Login } from "../tela de login/login";

export default function rota () {
    return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
    )
}
