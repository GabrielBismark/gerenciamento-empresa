import React from 'react'

import { Link } from "react-router-dom";

import "./Login.css"

export function Login() {
  return (
    <div id='container'>
      <div className="form-container">
        <img src='./img/medcin.png' alt="" /><hr style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }} />
        
        <form className='form' action="">
          <input type="text" id="user" placeholder='Digite o login' />
          <input type="password" id="password" placeholder='Digite a senha' />

          <Link to={'/Home'} id='entrar-btn' type="submit">Entrar</Link>
          <p>Esqueceu sua senha?</p>
        </form>
      </div>
    </div>
  )
}
