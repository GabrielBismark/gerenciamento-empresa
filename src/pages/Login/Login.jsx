import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        senha,
      });
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
        <img src='./img/medcin.png' alt="" className='img-login' />
        <hr style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }} />

        <form onSubmit={handleLogin} className='form' action="">
          <div className="form-content-login">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='ipt-login'
              placeholder='Digite o login'
            />
            <div className="senha-container">
              <input
                type={showSenha ? "text" : "password"}
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className='ipt-login'
                placeholder='Digite a senha'
                autoComplete="current-password"
              />
              <span
                className="icone-olho"
                onClick={() => setShowSenha((prev) => !prev)}
                style={{ cursor: "pointer", position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)" }}
                tabIndex={0}
                aria-label={showSenha ? "Ocultar senha" : "Mostrar senha"}
              >
                {showSenha ? (
                  // Olho aberto (você pode trocar por um SVG ou outro ícone)
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="#888" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                    <circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2"/>
                  </svg>
                ) : (
                  // Olho fechado
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="#888" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                    <circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2"/>
                    <line x1="4" y1="20" x2="20" y2="4" stroke="#888" strokeWidth="2"/>
                  </svg>
                )}
              </span>
            </div>
            <button id='entrar-btn' type="submit">Entrar</button>
          </div>
          <p>Esqueceu sua senha?</p>
        </form>
      </div>
    </div>
  )
}