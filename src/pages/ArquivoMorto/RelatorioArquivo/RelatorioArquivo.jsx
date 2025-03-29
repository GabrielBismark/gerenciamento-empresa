import React, { useEffect, useRef, useState } from 'react';

import SideBar from '../../../components/SideBar/SideBar';
import Header from '../../../components/HeaderGeral/HeaderGeral';

import $ from 'jquery';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons-dt';
import jszip from 'jszip';
import pdfMake from 'pdfmake/build/pdfmake';  // Certifique-se de usar 'pdfMake'

import './RelatorioArquivo.css'; // Arquivo CSS personalizado

DataTable.use(DT);
DT.Buttons.jszip(jszip);
DT.Buttons.pdfMake(pdfMake);

export const RelatorioArquivo = () => {
    const tableRef = useRef(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            initializeOrUpdateDataTable();
        }
    }, [items]);

    const fetchData = async () => {
        try {
            const [colmeiasResponse, descarteResponse] = await Promise.all([
                fetch('https://arquivo-morto-6f8c3-default-rtdb.firebaseio.com/colmeias.json'),
                fetch('https://arquivo-morto-6f8c3-default-rtdb.firebaseio.com/descarte.json'),
            ]);

            if (!colmeiasResponse.ok || !descarteResponse.ok) {
                throw new Error('Erro ao buscar dados');
            }

            const colmeiasData = await colmeiasResponse.json();
            const descarteData = await descarteResponse.json();

            const extractedItems = extractItems(colmeiasData, descarteData);
            setItems(extractedItems);
        } catch (error) {
            console.error('Erro ao obter dados:', error);
        }
    };

    const extractItems = (colmeiasData, descarteData) => {
        const items = [];
        for (const colmeiaKey in colmeiasData) {
            if (colmeiasData.hasOwnProperty(colmeiaKey)) {
                const colmeia = colmeiasData[colmeiaKey];
                const itensArmazenados = colmeia.itens_armazenados || {};
                for (const itemKey in itensArmazenados) {
                    if (itensArmazenados.hasOwnProperty(itemKey)) {
                        const item = itensArmazenados[itemKey];
                        const hasRelevantData = [
                            item.local,
                            item.ensaio,
                            item.ps,
                            item.orc,
                            item.conteudo,
                            item.patrocinador,
                            item.ano,
                            item.ano_descarte,
                            item.status
                        ].some((field) => field && field.trim() !== '');
                        if (hasRelevantData) {
                            items.push({
                                id: item.id,
                                local: item.local,
                                ensaio: item.ensaio,
                                ps: item.ps,
                                orc: item.orc,
                                conteudo: item.conteudo,
                                patrocinador: item.patrocinador,
                                ano: item.ano,
                                ano_descarte: item.ano_descarte,
                                status: item.status,
                            });
                        }
                    }
                }
            }
        }

        for (const discardId in descarteData) {
            if (descarteData.hasOwnProperty(discardId)) {
                const item = descarteData[discardId];
                items.push({
                    id: item.id,
                    local: item.local,
                    ensaio: item.ensaio,
                    ps: item.ps,
                    orc: item.orc,
                    conteudo: item.conteudo,
                    patrocinador: item.patrocinador,
                    ano: item.ano,
                    ano_descarte: item.ano_descarte,
                    status: 'Descartada',
                });
            }
        }
        return items;
    };

    const initializeOrUpdateDataTable = () => {
        const $table = $(tableRef.current);
        if ($.fn.DataTable.isDataTable(tableRef.current)) {
            $table.DataTable().clear();
            $table.DataTable().rows.add(items);
            $table.DataTable().draw();
        } else {
            $table.DataTable({
                data: items,
                columns: [
                    { title: 'Nº Caixa', data: 'id' },
                    { title: 'Local', data: 'local' },
                    { title: 'Ensaio', data: 'ensaio' },
                    { title: 'PS', data: 'ps' },
                    { title: 'ORC', data: 'orc' },
                    { title: 'Conteúdo', data: 'conteudo' },
                    { title: 'Patrocinador', data: 'patrocinador' },
                    { title: 'Ano', data: 'ano' },
                    { title: 'Ano de Descarte', data: 'ano_descarte' },
                    { title: 'Status', data: 'status' },
                ],

                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'pdfHtml5',
                        title: 'Relatório de Arquivo Morto',
                        filename: `Relatorio_de_Arquivo_Morto`,
                        orientation: 'portrait',
                        exportOptions: {
                            columns: [':visible'], // Garante a exportação de todas as colunas
                        },
                        customize: function (doc) {
                            // Configurando estilo padrão usando a variável fonts
                            doc.defaultStyle = {
                                font: 'Roboto', // Nome da fonte definida
                                fontSize: 7,
                            };

                            // Remover título padrão do documento
                            doc.content.splice(0, 1);

                            var now = new Date();
                            var jsDate = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
                            doc.pageMargins = [20, 60, 20, 30];
                            doc.styles.tableHeader.fontSize = 7;

                            // Cabeçalho
                            doc['header'] = (function () {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            italics: true,
                                            text: 'Relatório Fluig',
                                            fontSize: 18,
                                            margin: [10, 0]
                                        },
                                        {
                                            alignment: 'right',
                                            fontSize: 14,
                                            text: `Arquivo Morto`
                                        }
                                    ],
                                    margin: 20
                                };
                            });

                            // Rodapé
                            doc['footer'] = (function (page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: ['Criado em: ', { text: jsDate.toString() }]
                                        },
                                        {
                                            alignment: 'right',
                                            text: ['Página ', { text: page.toString() }, ' de ', { text: pages.toString() }]
                                        }
                                    ],
                                    margin: 20
                                };
                            });

                            // Configurando largura fixa para as colunas
                            doc.content[0].table.widths = [
                                '5%', // Nº Caixa
                                '5%', // Local
                                '15%', // Ensaio
                                '10%', // PS
                                '10%', // ORC
                                '15%', // Conteúdo
                                '10%', // Patrocinador
                                '10%', // Ano
                                '10%', // Ano de Descarte
                                '10%'  // Status
                            ];

                            // Configurando padding e layout
                            var objLayout = {};
                            objLayout['hLineWidth'] = function (i) { return 0.5; };
                            objLayout['vLineWidth'] = function (i) { return 0.5; };
                            objLayout['hLineColor'] = function (i) { return '#aaa'; };
                            objLayout['vLineColor'] = function (i) { return '#aaa'; };
                            objLayout['paddingLeft'] = function (i) { return 4; };
                            objLayout['paddingRight'] = function (i) { return 4; };
                            objLayout['paddingTop'] = function (i) { return 4; };
                            objLayout['paddingBottom'] = function (i) { return 4; };
                            doc.content[0].layout = objLayout;
                        }
                    },
                    {
                        extend: 'excelHtml5',
                        text: 'Exportar Excel',
                        title: 'Relatório de Arquivo Morto',
                        exportOptions: {
                            columns: ':visible' // Exporta todas as colunas visíveis
                        },
                        customize: function (xlsx) {
                            var sheet = xlsx.xl.worksheets['sheet1.xml'];

                            // Ajustar largura das colunas (automático conforme o conteúdo)
                            var cols = '';
                            $('row c', sheet).each(function () {
                                var cellValue = $(this).text();
                                var cellLength = cellValue.length;

                                // Definir largura baseada no comprimento do conteúdo
                                var width = Math.min(Math.max(cellLength * 1.2, 15), 60);  // Definir limites razoáveis

                                // Criar largura para a coluna
                                $(this).attr('width', width);
                                cols += `<col min="${$(this).index() + 1}" max="${$(this).index() + 1}" width="${width}" customWidth="1"/>`;
                            });

                            // Adicionar largura customizada ao Excel
                            var sheetData = sheet.getElementsByTagName('cols')[0];
                            if (!sheetData) {
                                sheetData = sheet.insertBefore(document.createElement('cols'), sheet.childNodes[0]);
                            }
                            sheetData.innerHTML = cols;

                            // Adicionar quebra de linha
                            $('row c', sheet).each(function () {
                                // Aplique estilo que permite quebra de linha (essa linha se aplica a células grandes)
                                $(this).attr('s', '55');
                            });
                        }
                    }
                ],
                responsive: true,
                paging: true,
                searching: true,
                language: {
                    info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
                    infoEmpty: 'Mostrando 0 a 0 de 0 entradas',
                    infoFiltered: '(filtrado de _MAX_ entradas totais)',
                },
                initComplete: function () {
                    $table.addClass('tb-morto');
                },
            });
        }
    };

    return (
        <div className='container-relatorio'>
            <nav>
                <SideBar />
                <Header />
            </nav>

            <header className="header">
                <h1>Arquivo Morto</h1>
                <h2>Relatório de Caixas</h2>
            </header>

            <main className="main main-relatorio">
                <h3 className='titulo'>Relatório</h3>

                <div className="sub-div">
                    <table ref={tableRef} className="display nowrap" style={{ width: '100%' }}></table>
                </div>
            </main>
        </div>
    );
};