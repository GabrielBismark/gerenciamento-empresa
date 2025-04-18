import React, { useState } from "react";

import { FiHome, FiStar, FiSettings, FiLogOut } from "react-icons/fi";
import { RxRocket } from "react-icons/rx";
import { TiDocumentText } from "react-icons/ti";
import { GrCycle } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./SideBar.css";

function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false); // Estado para expandir a barra
    const [activeItem, setActiveItem] = useState(null); // Estado para opções filhas

    // Função para exibir opções filhas do item clicado
    const handleItemClick = (item) => {
        setActiveItem(activeItem === item ? null : item);
    };

    const logout = () => {
        localStorage.removeItem('authToken'); // Remove o JWT
        window.location.href = '/'; // Redireciona para login
    };
    return (
        <div
            id="container-side"
            className={isExpanded ? "expanded" : ""}
            onMouseEnter={() => setIsExpanded(true)} // Expande a barra ao passar o mouse
            onMouseLeave={() => setIsExpanded(false)} // Retrai a barra ao retirar o mouse
        >
            <div className="user-section">
                <div className="user-photo"></div>
                {isExpanded && <p className="user-name">Admin</p>}
            </div>

            <hr style={{ width: "100%" }} />

            <div className="icons-section">
                <Link to="/Home" className="icons">
                    <FiHome />
                    {isExpanded && <span>Home</span>}
                </Link>

                <Link to="" className="icons">
                    <RxRocket />
                    {isExpanded && <span>Soluções</span>}
                </Link>

                <Link to="" className="icons" onClick={() => handleItemClick("favorito")}>
                    <FiStar />
                    {isExpanded && <span>Favoritos</span>}
                </Link>

                {activeItem === "favorito" && isExpanded && (
                    <div className="sub-options">
                        <Link to="">Documentos Favoritos</Link>
                        <Link to="">Processos Favoritos</Link>
                        <Link to="">Historico</Link>
                    </div>
                )}

                <Link to="" className="icons">
                    <TiDocumentText />
                    {isExpanded && <span>Documentos</span>}
                </Link>

                <Link to="" className="icons">
                    <GrCycle />
                    {isExpanded && <span>Processos</span>}
                </Link>

                <Link to="" className="icons">
                    <BsListTask />
                    {isExpanded && <span>Tarefas</span>}
                </Link>

                <Link to="/Controle" className="icons">
                    <FiSettings />
                    {isExpanded && <span>Painel de Controle</span>}
                </Link>

                <Link onClick={logout} className="icons">
                    <FiLogOut />
                    {isExpanded && <span>Sair</span>}
                </Link>
            </div>
        </div>
    );
}

export default SideBar;