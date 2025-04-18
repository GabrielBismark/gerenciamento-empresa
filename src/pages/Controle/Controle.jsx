import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/HeaderGeral/HeaderGeral'
import { Link } from 'react-router-dom'
import './Controle.css'

export const Controle = () => {
    return (
        <div className='container-controle'>
            <nav className='nav-geral'>
                <SideBar  />
                <Header />
            </nav>

            <div className='main-controle'>

                <h1>Painel de Controle</h1>

                <div className='grid-controle'>
                    <Link to="/Controle/Usuarios" className='secao-controle' style={{ gridArea: "usuarios", borderLeft: "20px solid var(--blue_medcin)" }}>
                        <img src="./img/img-tecnica.png" alt="" />
                        <h2>Controle de Usuários</h2>
                    </Link>
                </div>
            </div>

        </div>
    )
}
