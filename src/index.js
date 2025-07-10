// filepath: d:\PROJETOS\gerenciamento-empresa\src\index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'typeface-roboto';

// Import das pages
import { Login } from './pages/Login/Login.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Controle } from './pages/Controle/Controle.jsx';
import { Usuarios } from './pages/Controle/Usuarios/Usuarios.jsx';
import { AreaTecnica } from './pages/AreaTecnica/AreaTecnica.jsx';
import { Agendamento } from './pages/AreaTecnica/Agendamento/Agendamento.jsx';
import { AgendaParticipantes } from './pages/AreaTecnica/AgendaParticipantes/AgendaParticipantes.jsx';
import { Presenca } from './pages/AreaTecnica/Presenca/Presenca.jsx';

// Import do componente ProtectedRoute
import  ProtectedRoute  from './components/ProtectedRoute/ProtectedRoute.jsx';

import './index.css';
import App from './App.jsx';

// Definindo as rotas para cada page
const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            // Tela inicial (Login)
            {
                path: "/",
                element: <Login />
            },

            // Rotas protegidas
            {
                path: "/Home",
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                )
            },
            {
                path: "/Controle",
                element: (
                    <ProtectedRoute>
                        <Controle />
                    </ProtectedRoute>
                )
            },
            {
                path: "/Controle/Usuarios",
                element: (
                    <ProtectedRoute>
                        <Usuarios />
                    </ProtectedRoute>
                )
            },
            {
                path: "/Area-tecnica",
                element: (
                    <ProtectedRoute>
                        <AreaTecnica />
                    </ProtectedRoute>
                )
            },
            {
                path: "/Area-tecnica/Agendamento",
                element: (
                    <ProtectedRoute>
                        <Agendamento />
                    </ProtectedRoute>
                )
            },
            {
                path: "/Area-tecnica/Participantes",
                element: (
                    <ProtectedRoute>
                        <AgendaParticipantes />
                    </ProtectedRoute>
                )
            },
            {
              path: "/Area-tecnica/Presenca",
              element: (
                  <ProtectedRoute>
                      <Presenca />
                  </ProtectedRoute>
              )
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);