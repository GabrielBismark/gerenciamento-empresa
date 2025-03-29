import React, { useState } from 'react';

import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import NotificationDropdown from '../Notifys/Notifys';

import './HeaderGeral.css';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const toggleDropdown = (event) => {
        const rect = event.target.getBoundingClientRect(); // Posição relativa ao viewport
        setDropdownPosition({
            top: rect.bottom,  // Manter a posição abaixo do ícone
            left: rect.left - 110,  // Deslocar 10px para a esquerda, ajuste conforme necessário
        });
        setShowDropdown(!showDropdown);
    };

    const notifications = [
        "Notificação 1",
        "Notificação 2",
        "Notificação 3",
    ];

    return (
        <div className='header-geral'>
            <Link to={'/Home'}>
                <img src="https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/api/servlet/image/1/custom/logo_image.png" alt="Logo" />
            </Link>

            <input type="text" className='search' placeholder='Digite o que deseja buscar' />

            <div id='notify-container'>
                <span id='notify' onClick={toggleDropdown}>
                    <CiBellOn id='sino' />
                </span>
            </div>

            <NotificationDropdown
                show={showDropdown}
                position={dropdownPosition}
                notifications={notifications}
                onClose={() => setShowDropdown(false)}
            />
        </div>
    );
}

export default Header;
