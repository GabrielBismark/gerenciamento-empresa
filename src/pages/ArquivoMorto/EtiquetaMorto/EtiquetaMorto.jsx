import React, { useState } from 'react';

import Header from '../../../components/HeaderGeral/HeaderGeral';
import SideBar from '../../../components/SideBar/SideBar';
import Notifys from '../../../components/Notifys/Notifys';

import './EtiquetaMorto.css';

export const EtiquetaMorto = () => {
  // Estado para armazenar os dados da caixa
  const [itemId, setItemId] = useState('');
  const [itemData, setItemData] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [message, setMessage] = useState('');

  // Função para buscar dados no Firebase
  const getDataFromFirebase = async (itemId) => {
    const btnGerar = document.querySelector('#btn-gerar');
    try {
      const response = await fetch('https://arquivo-morto-6f8c3-default-rtdb.firebaseio.com/colmeias.json');

      if (!response.ok) {
        throw new Error('Erro ao conectar ao Firebase');
      }

      const data = await response.json();
      const foundItems = searchById(data, itemId);

      if (foundItems.length > 0) {
        setItemData(foundItems[0]);
        gerarQr(foundItems[0]);
        btnGerar.style.display = 'block';
      } else {
        setMessage('Nenhum item encontrado para o ID fornecido.');
      }
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      setMessage('Erro ao obter dados.');
    }
  };

  const searchById = (data, id) => {
    const results = [];
    for (const colmeia in data) {
      if (data.hasOwnProperty(colmeia)) {
        const itens = data[colmeia].itens_armazenados;
        for (const itemKey in itens) {
          if (itens.hasOwnProperty(itemKey)) {
            const item = itens[itemKey];
            if (item.id === id) {
              results.push({ colmeia, itemKey, ...item });
            }
          }
        }
      }
    }

    return results;
  };

  // Função para gerar o QR Code
  const gerarQr = (item) => {
    const GoogleCharts = 'https://quickchart.io/qr?text=';
    const qrText = `${item.orc} - ${item.id} - ${item.colmeia}`;
    const imageUrl = GoogleCharts + encodeURIComponent(qrText).replace(/%20/g, '');
    setQrCodeUrl(imageUrl);
  };

  // Função para manipular o evento de buscar
  const handleSearch = () => {
    if (itemId.trim()) {
      getDataFromFirebase(itemId.trim());
    } else {
      setMessage('Por favor, insira um código de caixa.');
    }
  };

  // Função para imprimir a etiqueta
  const imprimir = () => {
    if (!itemData) return;

    const { ensaio, orc, id, colmeia } = itemData;
    const qrCodeImage = qrCodeUrl;

    const htmlEnd = `
    </body>
    </html>`;

    const htmlHead = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Document</title>

      <style>
        body {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        .page {
            margin-bottom: 13px;
            margin-left: 15px;
        }
        .container {
            width: 264px;
            height: 113px;
            padding: 0%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
        }
        .conteudo-wraper {
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
        }
        .qr-code {
            width: 100px;
            margin-left: 8px;
        }
        .inline-div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid black;
        }
        .conteudo {
            width: 164px;
            display: flex;
            text-align: start;
            flex-direction: column;
            justify-content: start;
            align-items: start;
        }
        .container-uso {
            width: 264px;
            height: 113px;
            padding: 0%;
            text-align: justify;
        }
        .conteudo-wrapper-uso {
            padding: 12px;
        }
        h2 {
            margin: 0px;
            font-size: 10px;
            word-wrap: break-word;
        }
        span {
            color: #898989;
        }
    </style>
    
    </head>

    <body>`;

    const htmlContent = `
      <div id="page">
        <div class="container">
            <div class="conteudo-wraper">
                <div class="conteudo">
                  <div class="inline-div">
                    <h2>Orc: <span>${orc}</span></h2>
                  </div>

                  <div class="inline-div">
                    <h2>Código da caixa: <span>${id}</span></h2>
                  </div>

                  <div class="inline-div">
                    <h2>Endereço da caixa: <span>${colmeia}</span></h2>
                  </div>

                  <div class="inline-div">
                    <h2 id="conteudo">Conteúdo da caixa: <span>${ensaio}</span></h2>
                  </div>
                </div>

                <img src="${qrCodeImage}" class="qr-code">
            </div>
        </div>
      </div>
      <div class="page"></div>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(htmlHead + htmlContent + htmlEnd);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="container-etiqueta">
      <nav>
        <SideBar />
        <Header />
        <Notifys />
      </nav>

      <div className="header">
        <h1>Arquivo Morto</h1>
        <h2>Impressão de Etiqueta</h2>
      </div>

      <main className=" main main-etiqueta">
        <h3 className='titulo'>Etiquetas:</h3>

        <div className="in-etiqueta">
          <input
            type="text"
            name="search-box"
            id="search-box"
            placeholder="Inserir Código da Caixa"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
          />

          <button className="main-btn" id="buscar-box" onClick={handleSearch}>Buscar</button>

          {message && <div className="message">{message}</div>}

          {itemData && (
            <div className="etiqueta-info">
              <div className="in-info">
                <label htmlFor="orc">Orc:</label> <input type="text" name="orc" value={itemData.orc} readOnly />
                <label htmlFor="cod">Codigo da Caixa:</label> <input type="text" name="cod" value={itemData.id} readOnly />
                <label htmlFor="endereco">Endereço da Caixa:</label> <input type="text" name="endereco" value={itemData.colmeia} readOnly />
                <label htmlFor="conteudo">Conteúdo da Caixa:</label> <input type="text" name="conteudo" value={itemData.ensaio} readOnly />
              </div>
              
              <img src={qrCodeUrl} alt="QR Code" />
            </div>
          )}

          <button className="main-btn" id="btn-gerar" onClick={imprimir}>Gerar Etiqueta</button>
        </div>
      </main>
    </div>
  );
};