// filepath: d:\PROJETOS\gerenciamento-empresa\src\components\ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        return <Navigate to="/" />; // Redireciona para a página de login
    }

    return children; // Renderiza o conteúdo protegido
};

export default ProtectedRoute;