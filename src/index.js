//Imports gerais
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import 'typeface-roboto';

//------------------
//Import das pages
import { Login } from './pages/Login/Login.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Inclusao } from './pages/ArquivoMorto/Inclusao/Inclusao.jsx'
import { RetornoArquivo } from './pages/ArquivoMorto/RetornoArquivo/RetornoArquivo.jsx'
import { Descarte } from './pages/ArquivoMorto/Descarte/Descarte.jsx'
import { RelatorioArquivo } from './pages/ArquivoMorto/RelatorioArquivo/RelatorioArquivo.jsx'
import { EtiquetaMorto } from './pages/ArquivoMorto/EtiquetaMorto/EtiquetaMorto.jsx'
import { ArquivarCaixas } from './pages/ArquivoMorto/ArquivarCaixas/ArquivarCaixas.jsx'
import { CadastroParticipante } from './pages/Recrutamento/CadastroParticipante/CadastroParticipante.jsx'
import {SolAbertas} from '../src/pages/ArquivoMorto/SolAbertas/SolAbertas.jsx'
//-----------------

import './index.css'
import App from './App.jsx'

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
        path: "/ArquivoMorto/Inclusao",
        element: <Inclusao />
      },
      {
        path: "/ArquivoMorto/RetornoArquivo",
        element: <RetornoArquivo />
      },
      {
        path: "/ArquivoMorto/Descarte",
        element: <Descarte />
      },
      {
        path: "/ArquivoMorto/Relatorio",
        element: <RelatorioArquivo />
      },
      {
        path: "/ArquivoMorto/EtiquetaMorto",
        element: <EtiquetaMorto />
      },
      {
        path: "/ArquivoMorto/Arquivar",
        element: <ArquivarCaixas />
      },
      {
        path: "/Recrutamento/CadastroParticipante",
        element: <CadastroParticipante />
      },
      {
        path: "/Arquivomorto/SolAbertas",
        element: <SolAbertas />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)