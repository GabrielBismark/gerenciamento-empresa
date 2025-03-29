import React from 'react'

import { TiTrash, TiPencil } from "react-icons/ti";

import SideBar from '../../../components/SideBar/SideBar';
import Header from '../../../components/HeaderGeral/HeaderGeral';

import './Descarte.css'

export function Descarte() {
    return (
        <div className='container-descarte'>
            <nav>
                <SideBar />
                <Header />
            </nav>

            <header className='header'>
                <h1>Arquivo Morto</h1>
                <h2>Descarte de Caixas</h2>
            </header>

            <main className='main main-descarte'>
                <h3 className='titulo'>Escolha as caixas que deseja descartar</h3>

                <div className="search-caixa">
                    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                        <input type="text" placeholder='Inserir Código da Caixa' />
                        <button type="button" className='main-btn'>Buscar Caixa</button>
                    </div>

                    <div className="info-caixa">
                        <div className='icons-crud'>
                            <TiTrash style={{ cursor: 'pointer', color: 'red' }} onClick={discardCrud} />
                            <TiPencil style={{ cursor: 'pointer' }} onClick={editCrud} />
                        </div>

                        <label htmlFor="conteudo-caixa">Conteudo da Caixa:</label>
                        <input type="text" name='conteudo-caixa' id='conteudo-caixa' className='edit-ipts' readOnly />

                        <label htmlFor="orc-caixa">Orçamento:</label>
                        <input type="text" name='orc-caixa' id='orc-caixa' className='edit-ipts' readOnly />

                        <div style={{ display: "flex", gap: "30px" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="cod-caixa">Codigo da Caixa:</label>
                                <input type="text" name='cod-caixa' id='cod-caixa' className='edit-ipts' readOnly />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="endereco-caixa">Endereço:</label>
                                <input type="text" name='endereco-caixa' id='endereco-caixa' className='edit-ipts' readOnly />
                            </div>
                        </div>

                        <button className="main-btn" id='btn-discard' onClick={''}>Confirmar Descarte</button>
                        <button className="main-btn" id='btn-edit' onClick={confirmEdit}>Confirmar Edição</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

function editCrud() {
    const btnDiscard = document.querySelector('#btn-discard');
    btnDiscard.style.display = 'none'

    const editIpt = document.querySelectorAll('.edit-ipts');

    // Tornar os inputs editáveis
    editIpt.forEach((ipt) => {
        ipt.removeAttribute('readonly'); // Remove readonly
        ipt.removeAttribute('disabled'); // Remove disabled
        ipt.style.pointerEvents = 'auto'; // Garante interatividade
        ipt.style.userSelect = 'auto';   // Permite edição
        ipt.style.backgroundColor = '#ffffff';
    });

    const btnEdit = document.querySelector('#btn-edit');
    btnEdit.style.display = 'block'
}

function discardCrud() {
    const btnEdit = document.querySelector('#btn-edit');
    btnEdit.style.display = 'none'

    const editIpt = document.querySelectorAll('.edit-ipts');

    // Tornar os inputs não editáveis
    editIpt.forEach((ipt) => {
        ipt.setAttribute('readonly', ''); // Define readonly
        ipt.setAttribute('disabled', ''); // Define disabled
        ipt.style.pointerEvents = 'none'; // Impede interação
        ipt.style.userSelect = 'none';   // Impede seleção
        ipt.style.backgroundColor = '#f0f0f0'; // Ajusta a cor de fundo
    });

    const btnDiscard = document.querySelector('#btn-discard');
    btnDiscard.style.display = 'block'
}

function confirmEdit() {
    const editIpt = document.querySelectorAll('.edit-ipts');

    // Tornar os inputs não editáveis
    editIpt.forEach((ipt) => {
        ipt.setAttribute('readonly', ''); // Define readonly
        ipt.setAttribute('disabled', ''); // Define disabled
        ipt.style.pointerEvents = 'none'; // Impede interação
        ipt.style.userSelect = 'none';   // Impede seleção
        ipt.style.backgroundColor = '#f0f0f0'; // Ajusta a cor de fundo
    });

    // Ocultar o botão de edição
    const btnEdit = document.querySelector('#btn-edit');
    btnEdit.style.display = 'none'; // Remove o botão do fluxo visual
}