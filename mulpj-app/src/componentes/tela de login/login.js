import React from 'react';
import './login.css';
import logo from './image/logo.png'
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Cadastro } from '../tela de cadastro/cadastro';
const axios = require('axios');


export function Login(){
    async function getUser() {  
        try { 
            
            const email = document.getElementById('email').value
            const senha = document.getElementById('senha').value
            let a = `https://apitypescript.cleyssondias.repl.co/User/${email}/${senha}`
            const response = await axios.get(a);
            if (response.data.error){
              let tratamento =  document.querySelector('.res');
              return  tratamento.innerHTML = response.data.error  
            }
            else if (!response.data.error) {
               localStorage.setItem('nome' , response.data.user.name)
               localStorage.setItem('plano' , response.data.user.plan)
               localStorage.setItem('token' , response.data.token)
               localStorage.setItem('money' , response.data.user.money)
               window.location = '/cadastro'
            }
            
         
        } catch (error) {
          console.error(error.message || "Unexpected error.");
        }
      }
    
    return (
 <div className="main">
    <img src={logo}/>
        <div className="login">
            <h1>Login</h1>
                <div className='res'>

                </div>
                <p>Email</p>  
                <input type="email" id='email' required></input>
                <p>Senha</p>  
                <input type="password" id='senha' required></input>
                <p><button onClick={getUser}>LOGAR</button></p>
                <p className='links'><Link className='senhaTrocar' to='/cadastro'>Esqueceu a senha?</Link> <Link className='cadastro' to='/cadastro'>Não tem Cadastro?</Link></p>

        </div>
        
</div>

        
    );


}