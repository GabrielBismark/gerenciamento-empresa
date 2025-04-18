import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/HeaderGeral/HeaderGeral'
import { Link } from 'react-router-dom'
import './AreaTecnica.css'

export const AreaTecnica = () => {
    return (
        <div id='container-area-tecnica'>
            <nav>
                <SideBar style={{ gridArea: "sidebar" }} />
                <Header style={{ gridArea: "header" }} /><hr />
            </nav>

            <div className="main-tecnica">
                <Link to='/Area-tecnica/Agendamento' className="secao tecnica" style={{ gridArea: "agendamento", borderLeft: "20px solid var(--blue_medcin)" }}>
                    <h1>Agendamento</h1>
                    <img src="./img/img-tecnica.png " alt="" />
                </Link>

                <Link to='/Area-tecnica/Participantes' className="secao tecnica" style={{ gridArea: "participantes", borderLeft: "20px solid var(--green_medcin)" }}>
                    <h1>Horários Participantes</h1>
                    <img src="./img/img-tecnica.png " alt="" />
                </Link>

                <Link to='/Area-tecnica/Presenca' className="secao tecnica" style={{ gridArea: "presenca", borderLeft: "20px solid var(--orange_medcin)" }}>
                    <h1>Confirmação de Presença</h1>
                    <img src="./img/img-tecnica.png " alt="" />
                </Link>
            </div>
        </div>
    )
}
