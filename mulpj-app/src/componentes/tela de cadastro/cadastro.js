import React, { useEffect } from "react";
import './cadastro.css'
import logo from './image/Rectangle.png'

export function Cadastro() {
    useEffect(()=>{ 
        const a =document.querySelector('.test')
        a.innerHTML = localStorage.getItem('nome') || 'sexo'
    })    
    return(
        
    <div class="engloba">
        <div className="test">
            
        </div>
        <div class="mainn">
          <h1>Cadastro</h1>
          <form>
              <div class="item">
               <p>Nome Completo</p>
               <input type="text" name="nomeCliente"></input> 
               </div>
               <div class="item"> 
               <p>Email</p>
               <input type="email" name="emailCliente"></input> 
               </div>
               <div class="item">
               <p>Senha</p>
               <input type="password" name="senha"></input> 
               </div>
               <div class="item">  
               <p>Repetir a senha</p>
               <input type="password" name="confirmaSenha"></input> 
               </div >
               <div class="item">
               <label>Selecione seu Plano</label>
               <select> 
                      <option>Plano 1</option>
                      <option>Plano 2</option>
                      <option>Plano 3</option>          
               </select>
                </div>
               <div class="item"> 
               <button>Finalizar</button>
               <a>Login</a>
               </div>
          </form>  
       
        </div>
    </div>    
    )
}