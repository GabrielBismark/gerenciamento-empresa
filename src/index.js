//Imports gerais
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'typeface-roboto';

//------------------
//Import das pages
import { Login } from './pages/Login/Login.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Controle } from './pages/Controle/Controle.jsx';
//-----------------

import './index.css'
import App from './App.jsx'
import { Usuarios } from './pages/Controle/Usuarios/Usuarios.jsx';
import { AreaTecnica } from './pages/AreaTecnica/AreaTecnica.jsx';
import { Agendamento } from './pages/AreaTecnica/Agendamento/Agendamento.jsx';

//Definindo as rotas para cada page
const router = createBrowserRouter([
  {
    element: <App />,
    children: [

      //Tela inicial
      {
        path: "/",
        element: <Login />
      },

      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/Controle",
        element: <Controle />,
      },
      {
        path: "/Controle/Usuarios",
        element: <Usuarios />,
      },
      {
        path: "/Area-tecnica",
        element: <AreaTecnica/>,
      },
      {
        path: "/Area-tecnica/Agendamento",
        element: <Agendamento />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)