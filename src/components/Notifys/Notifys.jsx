import React from 'react';
import ReactDOM from 'react-dom';

import './Notifys.css';

const Notify = ({ show, position, notifications, onClose }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="notification-dropdown" style={{ top: position.top, left: position.left }}>
            <ul>
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <li key={index}>{notification}</li>
                    ))
                ) : (
                    <li>Sem notificações</li>
                )}
            </ul>
        </div>,
        document.body // Renderiza fora do fluxo DOM principal
    );
};

export default Notify;