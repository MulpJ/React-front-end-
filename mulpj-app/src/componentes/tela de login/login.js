import React from 'react';
import './login.css';
import logo from './image/logo.png'

export function Login(){
    return (
 <div class="main">
    <img src={logo}/>
        <div class="login">
            <h1>Login</h1>
            <form>
                <p>Email</p>  
                <input type="text" name='email' required></input>
                <p>Senha</p>  
                <input type="password" name='senha' required></input>
                <p><button>LOGAR</button></p>
                <p class='links'><a href='ablabal'>Não tem Cadastro?</a> <a href='sdsad'>Esqueceu a Senha?</a></p>
            </form>
        </div>
</div>

        
    );


}