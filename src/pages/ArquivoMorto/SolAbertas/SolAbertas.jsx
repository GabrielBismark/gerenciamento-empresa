import React from 'react'

import SideBar from '../../../components/SideBar/SideBar';
import Header from '../../../components/HeaderGeral/HeaderGeral';

import './SolAbertas.css'

export const SolAbertas = () => {
    return (
        <div className='container-sol-aberta'>
            <nav>
                <SideBar />
                <Header />
            </nav>

            <header className="header">
                <h1>Arquivo Morto</h1>
                <h2>Solicitações Abertas</h2>
            </header>

            <main className="main main-relatorio">
                <h3 className='titulo'>Relatório</h3>

                <div className="sub-div">
                    <table className='tb-sol-morto'>
                        <thead>
                            <tr>
                                <th>Nº Solicitação</th>
                                <th>Tipo de Solicitação</th>
                                <th>Conteúdo</th>
                                <th>Ensaio</th>
                                <th>PS</th>
                                <th>ORC</th>
                                <th>Patrocinador</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
