import React from 'react'

import { Link } from "react-router-dom";

import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/HeaderGeral/HeaderGeral';

import "./Home.css"

export function Home() {
    return (
        <div id='container-home'>

            <nav>
                <SideBar />
                <Header /><hr />
            </nav>

            <main className='main main-home'>
                <div className="secao comercial">
                    <h1>Cadastro Comercial</h1>

                    <div className="card-container">
                        <div className="card card-comercial">
                            <h2>Cliente/Patrocinador</h2>
                            <p>Cadastro Comercial</p>
                            <img src="https://raw.githubusercontent.com/Emanuel-developer992/imagens/refs/heads/main/icon/avaliacao-do-cliente.png" alt="" />
                        </div>

                        <div className="card card-comercial">
                            <h2>Produtos e Serviços</h2>
                            <p>Cadastro Comercial</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/produtos.png?raw=true" alt="" />
                        </div>
                        
                        <div className="card card-comercial">
                            <h2>Orçamento</h2>
                            <p>Cadastro Comercial</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/orcamento.png?raw=true" alt="" />
                        </div>

                        <div className="card card-comercial">
                            <h2>Critério de Participantes</h2>
                            <p>Cadastro Comercial</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/pessoas.png?raw=true" alt="" />
                        </div>

                        <div className="card card-comercial">
                            <h2>Folha de Rosto</h2>
                            <p>Estudo</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/Medcin/folha.png?raw=true" alt="" />
                        </div>
                    </div>
                </div>

                <div className="secao tecnico">
                    <h1>Cronograma Técnico</h1>

                    <div className="card-container">
                        <div className="card card-tecnico">
                            <h2>Cronograma</h2>
                            <p>Cronograma de Projetos</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/pessoas%20(1).png?raw=true" alt="" />
                        </div>

                        <div className="card card-tecnico">
                            <h2>Cronograma</h2>
                            <p>Minhas Tarefas</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </div>

                        <div className="card card-tecnico">
                            <h2>Projeto</h2>
                            <p>Elaboração de Projetos</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cronograma.png?raw=true" alt="" />
                        </div>
                    </div>
                </div>

                <div className="secao amostra">
                    <h1>Cadastro e Movimentação de Amostra</h1>

                    <div className="card-container">
                        <div className="card card-amostra">
                            <h2>Amostra</h2>
                            <p>Cadastro</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/amostra-de-sangue.png?raw=true" alt="" />
                        </div>

                        <div className="card card-amostra">
                            <h2>Amostra</h2>
                            <p>Movimentação</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/sensor-de-movimento.png?raw=true" alt="" />
                        </div>

                        <div className="card card-amostra">
                            <h2>Etiqueta</h2>
                            <p>QRCode</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/qr-code.png?raw=true" alt="" />
                        </div>

                        <div className="card card-amostra">
                            <h2>Amostra</h2>
                            <p>Dispensa para <br />Participantes</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/pessoas%20(1).png?raw=true" alt="" />
                        </div>

                        <div className="card card-amostra">
                            <h2>Amostra</h2>
                            <p>Solicitação</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cronograma.png?raw=true" alt="" />
                        </div>

                        <div className="card card-amostra">
                            <h2>Registro</h2>
                            <p>Registro de Amostra</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </div>

                        <div className="card card-amostra">
                            <h2>Recebimento</h2>
                            <p>Cadastro de <br />Recebimento</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/caminhao-de-entrega.png?raw=true" alt="" />
                        </div>

                        <div className="card card-amostra">
                            <h2>Amostra</h2>
                            <p>Relatório de <br />Solicitações</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </div>
                    </div>
                </div>

                <div className="secao compras">
                    <h1>Compras</h1>

                    <div className="card-container">
                        <div className="card card-compras">
                            <h2>Compras</h2>
                            <p>Solicitação de <br />Compras</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/carrinho-de-compras.png?raw=true" alt="" />
                        </div>

                        <div className="card card-compras">
                            <h2>Estoque</h2>
                            <p>Consulta e <br />Movimentação</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/caminhao-de-entrega.png?raw=true" alt="" />
                        </div>

                        <div className="card card-compras">
                            <h2>Estoque</h2>
                            <p>Cadastro de Item</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/caminhao-de-entrega.png?raw=true" alt="" />
                        </div>

                        <div className="card card-compras">
                            <h2>Fornecedor</h2>
                            <p>Cadastro Financeiro</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/caminhao-de-entrega.png?raw=true" alt="" />
                        </div>
                    </div>
                </div>

                <div className="secao recrutamento">
                    <h1>Recrutamento</h1>

                    <div className="card-container">
                        <Link to={'/Recrutamento/CadastroParticipante'} className="card card-recrutamento">
                            <h2>Participantes</h2>
                            <p>Cadastro <br />Recrutamento</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/pessoas%20(1).png?raw=true" alt="" />
                        </Link>

                        <div className="card card-recrutamento">
                            <h2>Participantes</h2>
                            <p>Relatório</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </div>

                        <div className="card card-recrutamento">
                            <h2>Participantes</h2>
                            <p>Recrutamento e <br />Técnico</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/enigma.png?raw=true" alt="" />
                        </div>

                        <div className="card card-recrutamento">
                            <h2>Participantes</h2>
                            <p>Gráficos de <br />Participantes</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/pessoas%20(1).png?raw=true" alt="" />
                        </div>

                        <div className="card card-recrutamento">
                            <h2>Etiqueta de <br />Participantes</h2>
                            <p>QRCode</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/qr-code.png?raw=true" alt="" />
                        </div>
                    </div>
                </div>

                <div className="secao arquivo-morto">
                    <h1>Arquivo Morto</h1>

                    <div className="card-container">
                        <Link to={'/ArquivoMorto/Inclusao'} className="card card-arquivo">
                            <h2>Inclusão de Caixas</h2>
                            <p>Operacional</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/produtos.png?raw=true" alt="" />
                        </Link>

                        <Link to={'/ArquivoMorto/RetornoArquivo'} className="card card-arquivo">
                            <h2>Retorno ao Arquivo</h2>
                            <p>Operacional</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/produtos.png?raw=true" alt="" />
                        </Link>
                        
                        <div className="card card-arquivo">
                            <h2>Retorno ao Setor</h2>
                            <p>Operacional</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </div>

                        <Link to={'/ArquivoMorto/Arquivar'} className="card card-arquivo">
                            <h2>Arquivar Caixas</h2>
                            <p>Qualidade</p>
                            <img src="https://raw.githubusercontent.com/Emanuel-developer992/Imagens/main/Medcin/Estoque%20Amostra.png" alt="" />
                        </Link>

                        <Link to={'/ArquivoMorto/Descarte'} className="card card-arquivo">
                            <h2>Descarte</h2>
                            <p>Qualidade</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </Link>

                        <Link to={'/ArquivoMorto/Relatorio'} className="card card-arquivo">
                            <h2>Relatório Caixas</h2>
                            <p>Qualidade</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </Link>

                        <Link to={'/ArquivoMorto/EtiquetaMorto'} className="card card-arquivo">
                            <h2>Etiqueta</h2>
                            <p>Qualidade</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/qr-code.png?raw=true" alt="" />
                        </Link>

                        <div className="card card-arquivo">
                            <h2>Adicionar Colmeias</h2>
                            <p>Qualidade</p>
                            <img src="https://raw.githubusercontent.com/Emanuel-developer992/Imagens/main/Medcin/Estoque%20Amostra.png" alt="" />
                        </div>
                        
                        <Link to={'/ArquivoMorto/SolAbertas'} className="card card-arquivo">
                            <h2>Solicitações Abertas</h2>
                            <p>Qualidade</p>
                            <img src="https://github.com/Emanuel-developer992/imagens/blob/main/icon/cadastro.png?raw=true" alt="" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

