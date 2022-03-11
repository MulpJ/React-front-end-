import React from 'react';
import './login.css';
export function Login(){
    return (
<body>
    <div class="contaneir">  
    <img src='image/logo.png'></img>
        <div class="login">
            <h1>Login</h1>
            <form>
                <p>Email</p>  
                <input type="text" name='email' required></input>
                <p>Senha</p>  
                <input type="password" name='senha' required></input>
                <p><button>LOGAR</button></p>
            </form>
        </div>
    </div>
</body>
        
        );


}