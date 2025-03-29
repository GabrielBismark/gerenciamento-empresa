import React from 'react'

import Header from '../../../components/HeaderGeral/HeaderGeral'
import SideBar from '../../../components/SideBar/SideBar'

import './Inclusao.css'

export function Inclusao() {
  return (
    <div className='container-inclusao'>
      <nav>
        <SideBar />
        <Header />
      </nav>

      <header className='header'>
        <h1>Arquivo Morto</h1>
        <h2>Solicitação de Inclusão de Caixas</h2>
      </header>

      <main className='main main-inclusao'>
        <h3 className='titulo'>Informações para inclusão</h3>

        <div className="boxes-info">

          <div className='conteudo box-inputs'>

            <label htmlFor="conteudo-caixa">Conteúdo da Caixa</label>

            <select name="conteudo-caixa" id="conteudo-caixa">

              <option value="selecione">Selecione...</option>
              <option value="ficha-clinica" class="verde">Ficha Clínica</option>
              <option value="implementacao" class="verde">Implementação</option>
              <option value="pasta-do-investigador" class="verde">Pasta do Investigador</option>
              <option value="controle-de-ressarcimento" class="verde">Controle de Ressarcimento</option>
              <option value="lista-master" class="verde">Lista Master</option>
              <option value="lista-de-delegacao" class="verde">Lista de Delegação</option>
              <option value="contratos-com-patrocinadores" class="laranja">Contratos com Patrocinadores</option>
              <option value="contratos-com-fornecedores">Contratos com Fornecedores</option>
              <option value="documentos-rh">Documentos RH</option>
              <option value="documentos-financeiro">Documentos Financeiro</option>
              <option value="documentos-comercial">Documentos Comercial</option>
              <option value="documentos-qualidade">Documentos da Qualidade</option>
              <option value="tcle">TCLE</option>
              <option value="diario-uso">Diario de Uso</option>
              <option value="questionario">Questionário</option>
              <option value="controle-pesagem">Controle de pesagem de produto</option>
              <option value="evento-adverso">Evento adverso</option>
              <option value="treinamentos">Treinamentos</option>
              <option value="controle-exposicao">Controle de exposição</option>
              <option value="caderno-de-registro">Caderno de Registro</option>

            </select>
            
          </div>

          <div className='data box-inputs'>
            <label htmlFor="data-solicitacao">Data da Solicitação:</label>
            <input type="text" name='data-solicitacao' id='data-solicitacao' />
          </div>

          <div className='provisorio box-inputs'>
            <label htmlFor="numero-provisorio">Número provisorio da caixa:</label>
            <input type="text" name='numero-privisorio' id='numero-privisorio' />
          </div>

          <div className='orc box-inputs'>
            <label htmlFor="orcamento">Orçamento:</label>
            <select name="orcamento" id="orcamento">
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className='ensaio box-inputs'>
            <label htmlFor="ensaio">Ensaio:</label>
            <select name="ensaio" id="ensaio">
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className='ps-area box-inputs'>
            <label htmlFor="ps">PS:</label>
            <select name="ps" id="ps">
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className='patroc box-inputs'>
            <label htmlFor="patrocinador">Patrocinador:</label>
            <select name="patrocinador" id="patrocinador">
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

        </div>

      </main>

    </div>
  )
}