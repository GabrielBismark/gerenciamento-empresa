import React, { useState } from 'react'

import SideBar from '../../../components/SideBar/SideBar';
import Header from '../../../components/HeaderGeral/HeaderGeral';

import './CadastroParticipante.css'

export const CadastroParticipante = () => {
    const [step, setStep] = useState(1); // Estado para controlar a etapa do formulário

    const handleStep = (stepNumber) => {
        setStep(stepNumber);
    };

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    // Função para voltar à etapa anterior
    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className='container-cadastro-participante'>
            <nav>
                <SideBar />
                <Header />
            </nav>

            <header className="header">
                <h1>Recrutamento</h1>
                <h2>Cadastro de Participantes</h2>
            </header>

            <main className='main main-cadastro-participante'>
                <div className="titulos">
                    <h3 className={`titulo1 ${step === 1 ? 'active' : ''}`} onClick={() => handleStep(1)}>
                        Dados Cadastrais do Participante
                    </h3>

                    <h3 className={`titulo2 ${step === 2 ? 'active' : ''}`} onClick={() => handleStep(2)}>
                        Informações Participantes
                    </h3>

                    <h3 className={`titulo3 ${step === 3 ? 'active' : ''}`} onClick={() => handleStep(3)}>
                        Classe Social
                    </h3>
                </div>

                <form action="">

                    {step === 1 && (
                        <div className='step1'>
                            <div className='principais-dados'>
                                
                                <div style={{ gridArea: 'nome' }}>
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input type="text" name="nome" id="nome" />
                                </div>

                                <div style={{ gridArea: 'apelido' }}>
                                    <label htmlFor="apelido">Como quero ser chamado</label>
                                    <input type="text" name="apelido" id="apelido" />
                                </div>

                                <div style={{ gridArea: 'sexo' }}>
                                    <label htmlFor="sexo">Sexo Biológico</label>
                                    <select name="sexo" id="sexo">
                                        <option value="selecione">Selecione...</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>
                                </div>

                                <div style={{ gridArea: 'genero' }}>
                                    <label htmlFor="genero">Identidade de Gênero</label>
                                    <select name="genero" id="genero">
                                        <option value="selecione">Selecione...</option>
                                        <option value="cisgenero">Cisgênero (Me identifico com meu sexo)</option>
                                        <option value="transgenero">Trangênero (Não me identifico com meu sexo)</option>
                                        <option value="nb">Não Aplicável</option>
                                    </select>
                                </div>

                                <div style={{ gridArea: 'sexualidade' }}>
                                    <label htmlFor="sexualidade">Orientação Sexual</label>
                                    <select name="sexualidade" id="sexualidade">
                                        <option value="selecione">Selecione...</option>
                                        <option value="homossexual">Homossexual</option>
                                        <option value="heterossexual">Heterossexual</option>
                                        <option value="Bissexual">Bissexual</option>
                                        <option value="Assexual">Assexual</option>
                                        <option value="Pansexual">Pansexual</option>
                                        <option value="nao aplicavel">Não Aplicável</option>
                                    </select>
                                </div>

                                <div style={{ gridArea: 'rg' }}>
                                    <label htmlFor="rg">RG</label>
                                    <input type="text" name="rg" id="rg" />
                                </div>

                                <div style={{ gridArea: 'cpf' }}>
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text" name="cpf" id="cpf" />
                                </div>

                                <div style={{ gridArea: 'nascimento' }}>
                                    <label htmlFor="nascimento">Data de Nascimento</label>
                                    <input type="text" name="nascimento" id="nascimento" placeholder='DD/MM/AAAA' />
                                </div>

                                <div style={{ gridArea: 'idade' }}>
                                    <label htmlFor="idade">Idade</label>
                                    <input type="text" name="idade" id="idade" readOnly />
                                </div>

                                <div style={{ gridArea: 'cep' }}>
                                    <label htmlFor="cep">CEP da Residência</label>
                                    <input type="text" name="cep" id="cep" />
                                </div>

                                <div style={{ gridArea: 'rua' }}>
                                    <label htmlFor="rua">Rua</label>
                                    <input type="text" name="rua" id="rua" placeholder='Rua/Av./Via/Estrada/Rodovia' />
                                </div>

                                <div style={{ gridArea: 'numero' }}>
                                    <label htmlFor="numero">Nº</label>
                                    <input type="text" name="numero" id="numero" />
                                </div>

                                <div style={{ gridArea: 'complemento' }}>
                                    <label htmlFor="complemento">Complemento</label>
                                    <input type="text" name="complemento" id="complemento" />
                                </div>

                                <div style={{ gridArea: 'bairro' }}>
                                    <label htmlFor="bairro">CPF</label>
                                    <input type="text" name="bairro" id="bairro" />
                                </div>

                                <div style={{ gridArea: 'cidade' }}>
                                    <label htmlFor="cidade">Cidade/Município</label>
                                    <input type="text" name="cidade" id="cidade" readOnly />
                                </div>

                                <div style={{ gridArea: 'estado' }}>
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" name="estado" id="estado" readOnly />
                                </div>

                                <div style={{ gridArea: 'pais' }}>
                                    <label htmlFor="pais">País</label>
                                    <input type="text" name="pais" id="pais" />
                                </div>

                                <div style={{ gridArea: 'celular' }}>
                                    <label htmlFor="celular">Celular de Contato</label>
                                    <input type="text" name="celular" id="celular" />
                                </div>

                                <div style={{ gridArea: 'telefonectt' }}>
                                    <label htmlFor="telefonectt">Telefone de Contato</label>
                                    <input type="text" name="telefonectt" id="telefonectt" />
                                </div>

                                <div style={{ gridArea: 'telefonercd' }}>
                                    <label htmlFor="telefonercd">Telefone para Recado</label>
                                    <input type="text" name="telefonercd" id="telefonercd" />
                                </div>

                                <div style={{ gridArea: 'nomercd' }}>
                                    <label htmlFor="nomercd">Nome de Contato para Recado</label>
                                    <input type="text" name="nomercd" id="nomercd" />
                                </div>

                                <div style={{ gridArea: 'pcd' }}>
                                    <label htmlFor="pcd">Sou uma Pessoa com Deficiência (PCD)?</label>
                                    <select name="pcd" id="pcd">
                                        <option value="selecione">Selecione...</option>
                                        <option value="masculino">Sim</option>
                                        <option value="feminino">Não</option>
                                    </select>
                                </div>

                                <div style={{ gridArea: 'profissao' }}>
                                    <label htmlFor="profissao">Sua Profissão</label>
                                    <input type="text" name="profissao" id="profissao" />
                                </div>

                            </div>

                            <div className="secao-contatos">
                                <h4>Contatos</h4>
                                
                                <div className='ipt-contatos'>
                                    <div>
                                        <label htmlFor="nome-contatos">Nome</label><br />
                                        <input type="text" name="nome-contatos" id="nome-contatos" />
                                    </div>

                                    <div>
                                        <label htmlFor="telefone-contatos">Telefone</label><br />
                                        <input type="text" name="telefone-contatos" id="telefone-contatos" />
                                    </div>
                                </div>

                                <div className='btns-contatos'>
                                    <button className="btn-ctt" id='adicionar-contato'>Adicionar Contato</button>
                                    <button className="btn-ctt" id='remover-contato'>Remover Contato</button>
                                </div>

                                <table className='tb-contatos'>
                                    <thead>
                                        <tr>
                                            <td>Nome</td>
                                            <td>Telefone</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div className='secao-redes'>
                                <div style={{ gridArea: 'email' }}>
                                    <label htmlFor="email">E-mail</label><br />
                                    <input type="email" name="email" id="email" />
                                </div>

                                <div style={{ gridArea: 'insta' }}>
                                    <label htmlFor="insta">Instagram</label><br />
                                    <input type="text" name="insta" id="insta" />
                                </div>

                                <div style={{ gridArea: 'facebook' }}>
                                    <label htmlFor="facebook">Facebook</label><br />
                                    <input type="text" name="facebook" id="facebook" />
                                </div>

                                <div style={{ gridArea: 'conheceu' }}>
                                    <label htmlFor="conheceu">Por onde nos conheceu?</label><br />
                                    <input type="text" name="conheceu" id="conheceu" />
                                </div>
                            </div>

                            <div className="btns-nav">
                                <button className="btn-ctt btn-next" onClick={nextStep}>Proximo</button>
                            </div>
                        </div>

                    )}

                    {step === 2 && (

                        <div className='step2'>

                            <div className="secao-fenotipo">
                                <h4>Definição Fenotipo</h4>

                                <div className="info-fenotipo">
                                    <div style={{ gridArea: 'olho' }}>
                                        <label htmlFor="olho">Cor dos seus olhos?</label>
                                        <select name="olho" id="olho">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>

                                    <div style={{ gridArea: 'cor-cabelo' }}>
                                        <label htmlFor="cor-cabelo">Cor natural dos seus cabelos?</label>
                                        <select name="cor-cabelo" id="cor-cabelo">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>

                                    <div style={{ gridArea: 'cor-pele' }}>
                                        <label htmlFor="cor-pele">Cor natural da sua pele?</label>
                                        <select name="cor-pele" id="cor-pele">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>

                                    <div style={{ gridArea: 'expo-sol' }}>
                                        <label htmlFor="expo-sol">Após exposição SOLAR, sua pele:</label>
                                        <select name="expo" id="expo-sol">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>

                                    <div style={{ gridArea: 'fenotipo' }}>
                                        <label htmlFor="fenotipo">Seu Fototipo Conforme Respondido é:</label>
                                        <input type="fenotipo" name="fenotipo" id="fenotipo" readOnly />
                                    </div>
                                </div>
                            </div>

                            <div className="secao-sensibilidade">
                                <h4>Definição Sensibilidade da Pele</h4>

                                <div className="info-sensibilidade">
                                    <div style={{ gridArea: 'quente-frio' }}>
                                        <label htmlFor="quente-frio">Sua pele fica sensível, com vermelhidão e/ou coceira em dias de temperaturas muito quente e/ou frio?</label>
                                        <select name="quente-frio" id="quente-frio">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>

                                    <div style={{ gridArea: 'descamar' }}>
                                        <label htmlFor="descamar">Sua pele costuma descamar (descascar) ao redor do nariz e boca?</label>
                                        <select name="descamar" id="descamar">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>

                                    <div style={{ gridArea: 'coceira-sabonete' }}>
                                        <label htmlFor="coceira-sabonete">Sua pele fica sensível, com vermelhidão e/ou coceira após uso de sabonete?</label>
                                        <select name="coceira-sabonete" id="coceira-sabonete">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>
                                    
                                    <div style={{ gridArea: 'sensibilidade' }}>
                                        <label htmlFor="sensibilidade">A sensibilidade da sua pele, mediante as respostas enviadas, é considerada:</label>
                                        <select name="sensibilidade" id="sensibilidade">
                                            <option value="selecione">Selecione...</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="mel">Mel, Castanho Claro</option>
                                            <option value="castanho">Castanho Escuro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="btns-nav">
                                <button type="button" className="btn-ctt" onClick={prevStep}>Voltar</button>
                                <button className="btn-ctt btn-next" onClick={nextStep}>Proximo</button>
                            </div>
                        </div>

                    )}
                    
                </form>
            </main>
        </div>
    )
}