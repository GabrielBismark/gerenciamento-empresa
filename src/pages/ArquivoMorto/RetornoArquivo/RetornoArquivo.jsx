import React from 'react'

/* IMPORT DE COMPONENTES */
import SideBar from '../../../components/SideBar/SideBar';
import Header from '../../../components/HeaderGeral/HeaderGeral';

/* import de CSS */
import './RetornoArquivo.css'

export function RetornoArquivo() {
    return (
        <div className='container-ret-arquivo'>
            <nav>
                <SideBar />
                <Header />
            </nav>

            <header className='header'>
                <h1>Arquivo Morto</h1>
                <h2>Retorno ao Arquivo Morto</h2>
            </header>

            <main className='main main-ret-arquivo'>
                <h3 className='titulo'>Insira as caixas que deseja retornar</h3>

                <div className="search-caixa">

                    <input type="text" placeholder='Inserir Código da Caixa' />

                    <button type="button" className='main-btn'>Buscar Caixa</button>

                    <div className="info-caixa">
                        <label htmlFor="conteudo-caixa">Conteudo da Caixa:</label>
                        <input type="text" name='conteudo-caixa' id='conteudo-caixa' readOnly />

                        <label htmlFor="orc-caixa">Orçamento:</label>
                        <input type="text" name='orc-caixa' id='orc-caixa' readOnly />

                        <div style={{ display: "flex", gap: "30px" }}>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="cod-caixa">Codigo da Caixa:</label>
                                <input type="text" name='cod-caixa' id='cod-caixa' readOnly />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="endereco-caixa">Endereço:</label>
                                <input type="text" name='endereco-caixa' id='endereco-caixa' readOnly />
                            </div>

                        </div>

                    </div>

                    <button className="main-btn">Adicionar Caixas de Retorno</button>

                </div>

            </main>

        </div>
    )
}