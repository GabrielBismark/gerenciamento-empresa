import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useEffect } from 'react'  

import { Link } from "react-router-dom";

import "./Login.css"

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        senha,
      });

      // Salvando o token no localStorage
      const { token } = response.data;
      localStorage.setItem("authToken", token);

      navigate("/Home");
    } catch (error) {
      setError(error.response?.data?.msg || "Erro ao logar.");
    }
    console.log(error)
  };


  return (
    <div id='container'>
      <div className="form-container">
        <img src='./img/medcin.png' alt="" className='img-login' /><hr style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }} />

        <form onSubmit={handleLogin} className='form' action="">
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='ipt-login' placeholder='Digite o login' />
          <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} className='ipt-login' placeholder='Digite a senha' />

          <button id='entrar-btn' type="submit">Entrar</button>
          <p>Esqueceu sua senha?</p>
        </form>
      </div>
    </div>
  )
}
