import React from 'react';
import './login.css';

export function Login(){
    return (
 <div class="main">
    <img src="logo.png"></img>
        <div class="login">
            <h1>Login</h1>
            <form>
                <p>Email</p>  
                <input type="text" name='email' required></input>
                <p>Senha</p>  
                <input type="password" name='senha' required></input>
                <p><button>LOGAR</button></p>
                <p class='links'><a href='ablabal'>esqueceu a senha?</a> <a href='sdsad'>Nao tem cadastro?</a></p>
            </form>
        </div>
</div>

        
    );


}