import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './cadastro.css'
import logo from './image/Rectangle.png'
import seta from './image/Vector.png'
const axios = require('axios');

export function Cadastro() {
    
    async function Cadas(){
        try{
        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const senha = document.getElementById('senha').value
        const senhaConf = document.getElementById('senhaRep').value

        if (senha != senhaConf){
            return alert('As Senhas nao condizem') 
        }
        else if (senha.length < 8){
            return alert('Sua senha é menor que 8 digitos')
        }
    
           const response = await axios.post('https://apitypescript.cleyssondias.repl.co/User', {"name":nome,
           "email":email,
           "password":senha,
           "plan":"Free"})
           alert("Usuário Cadastrado Com Sucesso")
           if (response.data.error){
               return alert(response.data.error)
           }
         
        }
    catch (error){
        console.log(error)
    }

    }
    return(
      
    <div className="engloba">
        <div className="img">
         <Link to='/login'><img src={seta}></img></Link>
        </div>
         <div className="corpo">
            <div>
                <img src={logo}></img>
            </div>
                <div className="itens">   
                    <h1>Cadastro</h1>
                    <p>Nome Completo</p>
                    <input  id="nome" type="text" required></input>
                    <p>Email</p>
                    <input id="email"  type="email" required></input>
                    <p>Senha</p>
                    <input id="senha" type="password" required></input>
                    <p>Repita a Senha</p>
                    <input id="senhaRep" type="password" required></input>
                            <div className="plano">
                                <p>Plano</p>
                                <select id="plano">
                                    <option>Free</option>
                                    <option>Gold (em breve)</option>
                                    <option>Master(em breve)</option>
                                </select>
                            </div>
                          <div className="Pagamentos">

                          </div>
                    <button onClick={Cadas} id="btn">Finalizar</button>
                    <p><Link to="/login">Login</Link></p>
                 </div>


        </div>

    </div>    
    )
}