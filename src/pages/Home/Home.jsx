import React, { useEffect } from 'react'

import { Link, useNavigate } from "react-router-dom";

import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/HeaderGeral/HeaderGeral';

import "./Home.css"

export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/'); // Redireciona para a página de login se não estiver autenticado
        }
    }, [navigate]);

    return (
        <div id='container-home'>

            <nav>
                <SideBar style={{ gridArea: "sidebar" }} />
                <Header style={{ gridArea: "header" }} /><hr />
            </nav>

            <div className='main-home' style={{ gridArea: "main" }}>

                <Link to='/Area-tecnica' className="secao tecnica" style={{ gridArea: "tecnica", borderLeft: "20px solid var(--blue_medcin)" }}>
                    <h1>Area Técnica</h1>
                    <img src="./img/img-tecnica.png " alt="" />
                </Link>

                <div className="secao cronograma" style={{ gridArea: "cronograma", borderLeft: "20px solid var(--orange_medcin)" }}>
                    <h1>Cronograma Técnico</h1>

                    <img src="./img/img-cronograma.png" alt="" />
                </div>

                <div className="secao recrutamento" style={{ gridArea: "recrutamento", borderLeft: "20px solid var(--purple_medcin)" }}>
                    <h1>Recrutamento</h1>

                    <img src="./img/img-recrutamento.png" alt="" />
                </div>

                <div className="secao comercial" style={{ gridArea: "comercial", borderLeft: "20px solid var(--pink_medcin)" }}>
                    <h1>Comercial</h1>

                    <img src="./img/img-comercial.png" alt="" />
                </div>

                <div className="secao compras" style={{ gridArea: "compras", borderLeft: "20px solid var(--blue_medcin)" }}>
                    <h1>Compras</h1>

                    <img src="./img/img-compras.png" alt="" />
                </div>

                <div className="secao amostra" style={{ gridArea: "amostras", borderLeft: "20px solid var(--green_medcin)" }}>
                    <h1>Amostras</h1>

                    <img src="./img/img-amostras.png" alt="" />
                </div>

                <div className="secao operacional" style={{ gridArea: "operacional", borderLeft: "20px solid var(--orange_medcin)" }}>
                    <h1>Operacional</h1>

                    <img src="./img/img-operacional.png" alt="" />
                </div>

                <div className="secao arquivo-morto" style={{ gridArea: "arquivo", borderLeft: "20px solid var(--purple_medcin)" }}>
                    <h1>Arquivo Morto</h1>

                    <img src="./img/img-morto.png" alt="" />
                </div>

                <div className="secao suporte" style={{ gridArea: "suporte", borderLeft: "20px solid var(--blue_medcin)" }}>
                    <h1>Suporte</h1>

                    <img src="./img/img-suporte.png" alt="" />
                </div>

            </div>
        </div>
    )
}

