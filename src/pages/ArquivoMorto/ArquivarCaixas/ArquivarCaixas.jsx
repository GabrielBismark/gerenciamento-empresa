import React from 'react'

import Header from '../../../components/HeaderGeral/HeaderGeral';
import SideBar from '../../../components/SideBar/SideBar';
import Notifys from '../../../components/Notifys/Notifys';

import './ArquivarCaixas.css';

export const ArquivarCaixas = () => {
    return (
        <div className='container-arquivar'>
            <nav>
                <SideBar />
                <Header />
                <Notifys />
            </nav>

            <div className="header">
                <h1>Arquivo Morto</h1>
                <h2>Arquivar Caixas</h2>
            </div>

            <main className='main main-arquivar'>
                <h3 className='titulo'>Você recebeu solicitação de arquivamento das caixas abaixo:</h3>

                <div className="div-caixas">
                    <div className='caixa'>
                        <div style={{ gridArea: 'conteudo' }}>
                            <label htmlFor="conteudo">Conteúdo da caixa:</label>
                            <textarea name="conteudo" id="conteudo" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'orc' }}>
                            <label htmlFor="orc">ORC:</label>
                            <textarea name="orc" id="orc" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'ensaio' }}>
                            <label htmlFor="ensaio">Ensaio</label>
                            <textarea name="ensaio" id="ensaio" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'ps' }}>
                            <label htmlFor="ps">PS:</label>
                            <textarea name="ps" id="ps" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'patrocinador' }}>
                            <label htmlFor="patrocinador">Patrocinador:</label>
                            <textarea name="patrocinador" id="patrocinador" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'numtemp' }}>
                            <label htmlFor="num-temp">Nº Provisório:</label>
                            <textarea name="num-temp" id="num-temp" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'temparmazenamento', display: 'flex', gap: '20px' }}>
                            <label htmlFor="tempo-armazenamento">Tempo de armazenamento:</label>
                            <select name="tempo-armazenamento" id="tempo-armazenamento">
                                <option value="selecione">Selecione</option>
                                <option value="5">5 anos</option>
                                <option value="10">10 anos</option>
                                <option value="15">15 anos</option>
                                <option value="20">20 anos</option>
                            </select>
                        </div>
                    </div>

                    <div className='caixa'>
                        <div style={{ gridArea: 'conteudo' }}>
                            <label htmlFor="conteudo">Conteúdo da caixa:</label>
                            <textarea name="conteudo" id="conteudo" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'orc' }}>
                            <label htmlFor="orc">ORC:</label>
                            <textarea name="orc" id="orc" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'ensaio' }}>
                            <label htmlFor="ensaio">Ensaio</label>
                            <textarea name="ensaio" id="ensaio" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'ps' }}>
                            <label htmlFor="ps">PS:</label>
                            <textarea name="ps" id="ps" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'patrocinador' }}>
                            <label htmlFor="patrocinador">Patrocinador:</label>
                            <textarea name="patrocinador" id="patrocinador" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'numtemp' }}>
                            <label htmlFor="num-temp">Nº Provisório:</label>
                            <textarea name="num-temp" id="num-temp" cols="23"
                                rows="4" readOnly></textarea>
                        </div>

                        <div style={{ gridArea: 'temparmazenamento', display: 'flex', gap: '20px' }}>
                            <label htmlFor="tempo-armazenamento">Tempo de armazenamento:</label>
                            <select name="tempo-armazenamento" id="tempo-armazenamento">
                                <option value="selecione">Selecione</option>
                                <option value="5">5 anos</option>
                                <option value="10">10 anos</option>
                                <option value="15">15 anos</option>
                                <option value="20">20 anos</option>
                            </select>
                        </div>
                    </div>
                    
                    <button className="main-btn" id='btn-gerar' style={{ gridArea: 'btn-gerar' }}>Gerar Etiquetas</button>
                </div>
            </main>
        </div>
    )
}