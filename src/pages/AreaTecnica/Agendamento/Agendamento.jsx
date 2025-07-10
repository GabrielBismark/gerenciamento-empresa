import React, { useState } from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import Header from '../../../components/HeaderGeral/HeaderGeral';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Agendamento.css';

export const Agendamento = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [setor, setSetor] = useState("selecione");
    const [hr1, setHr1] = useState("07:00");
    const [hr2, setHr2] = useState("18:00");
    const [inter, setInter] = useState("00:30");
    const [tbAgenda, setTbAgenda] = useState([]);
    const [showModalTb, setShowModalTb] = useState(false);

    const formatarSegundos = (horas, minutos) => horas * 3600 + minutos * 60;

    const conversorMin = (segundos) => {
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
    };

    const gerarAgenda = async () => {

        const dataFormatada = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
        const url = `https://agendamento-2fd8b-default-rtdb.firebaseio.com/agendas/${dataFormatada}/${setor}.json`;

        try {
            // 🔍 Verifica se já existe agenda cadastrada
            const checkResponse = await fetch(url);
            const existingData = await checkResponse.json();

            if (existingData) {
                alert("Já existe uma agenda cadastrada para esse setor e data!");
                return; // ⚠️ Interrompe aqui
            }
        } catch (error) {
            alert("Erro ao verificar agenda: " + error.message);
            return; // ⚠️ Interrompe aqui
        }
        let hrInit = hr1.split(':');
        let hrEnd = hr2.split(':');
        let intervalo = inter.split(':');

        const init = formatarSegundos(parseInt(hrInit[0]), parseInt(hrInit[1]));
        const end = formatarSegundos(parseInt(hrEnd[0]), parseInt(hrEnd[1]));
        const minInter = formatarSegundos(parseInt(intervalo[0]), parseInt(intervalo[1]));

        const nInter = (end - init) / minInter;

        if (isNaN(nInter)) {
            alert("Preencha corretamente os intervalos!");
            return;
        }

        let currentTime = init;
        const novaAgenda = [];

        for (let i = 0; i < nInter; i++) {
            const horario = conversorMin(currentTime);
            novaAgenda.push({
                horario,
                orc: "",
                estudo: "",
                vaga: "",
                tempo: "",
                status: "",
                bloqueado: false,
            });
            currentTime += minInter;
        }

        setTbAgenda(novaAgenda);
        setShowModalTb(true);
    };

    const adicionarVaga = (index) => {
        const novaAgenda = [...tbAgenda];

        // Verifica se o número de vagas já atingiu o limite de 30
        if (!novaAgenda[index].vagas) {
            novaAgenda[index].vagas = [];
        }

        if (novaAgenda[index].vagas.length >= 29) {
            alert("Limite de 30 vagas atingido para este horário!");
            return;
        }

        // Adiciona uma nova vaga ao intervalo
        novaAgenda[index].vagas.push({
            horario: novaAgenda[index].horario,
            orc: "",
            estudo: "",
            vaga: "",
            tempo: "",
            status: "",
        });

        setTbAgenda(novaAgenda);
    };

    const bloquearHorario = (index) => {
        const novaAgenda = [...tbAgenda];
        novaAgenda[index].bloqueado = !novaAgenda[index].bloqueado;
        setTbAgenda(novaAgenda);
    };

    const removerVaga = (index, vagaIndex) => {
        const novaAgenda = [...tbAgenda];
        novaAgenda[index].vagas.splice(vagaIndex, 1); // Remove a vaga específica
        setTbAgenda(novaAgenda);
    };


    const enviarAgenda = async () => {
        if (setor === "selecione") {
            alert("Selecione um setor!");
            return;
        }

        const dataFormatada = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
        const url = `https://agendamento-2fd8b-default-rtdb.firebaseio.com/agendas/${dataFormatada}/${setor}.json`;

        try {
            const payload = {
                hrInicio: hr1,
                hrFim: hr2,
                intervalo: inter,
                slots: tbAgenda
            };

            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Erro ao salvar dados!");

            alert("Agenda salva com sucesso no Firebase!");
        } catch (error) {
            alert("Erro ao enviar agenda: " + error.message);
        }
        setShowModalTb(false); // Fecha o modal após enviar a agenda
    };


    return (
        <div id='container-agendamento'>
            <nav>
                <SideBar style={{ gridArea: "sidebar" }} />
                <Header style={{ gridArea: "header" }} /><hr />
            </nav>

            <div className="main-agendamento">
                <div className='container-configuracao'>
                    <h2>Selecione uma data para criar uma agenda</h2>
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="custom-calendar"
                    />
                    <p className='data-selec'>Data selecionada: {selectedDate.toLocaleDateString()}</p>

                    <select value={setor} onChange={(e) => setSetor(e.target.value)}>
                        <option value="selecione">Selecione...</option>
                        <option value="fps">FPS</option>
                        <option value="patch">Patch</option>
                        <option value="eficacia">Eficácia</option>
                        <option value="tele">Teleatendimento</option>
                    </select>

                    <button className='btn-gerar' onClick={() => { gerarAgenda() }}>Gerar Agenda</button>
                </div>

                {showModalTb && (
                    <div className="modal-agenda">
                        <div className="modal-content-agenda">
                            <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", overflow: "hidden", padding: "10px" }}>
                                <h2>Agenda Gerada</h2>
                                <button className="close" onClick={() => setShowModalTb(false)}>X</button>
                            </div>
                            <div className="table-container">
                                <table id="tb_agenda">
                                    <thead>
                                        <tr>
                                            <th>Horário</th>
                                            <th>Orçamento</th>
                                            <th>Estudo</th>
                                            <th>Vaga</th>
                                            <th>Tempo</th>
                                            <th>Status</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tbAgenda.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <tr className={item.bloqueado ? "bloqueado" : ""}>
                                                    <td className="horario" rowSpan={item.vagas ? item.vagas.length + 1 : 1}>
                                                        {item.horario}
                                                        <button
                                                            className="btn btn-success btn-sm"
                                                            onClick={() => adicionarVaga(index)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={item.orc}
                                                            onChange={(e) => {
                                                                const novaAgenda = [...tbAgenda];
                                                                novaAgenda[index].orc = e.target.value;
                                                                setTbAgenda(novaAgenda);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={item.estudo}
                                                            onChange={(e) => {
                                                                const novaAgenda = [...tbAgenda];
                                                                novaAgenda[index].estudo = e.target.value;
                                                                setTbAgenda(novaAgenda);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={item.vaga}
                                                            onChange={(e) => {
                                                                const novaAgenda = [...tbAgenda];
                                                                novaAgenda[index].vaga = e.target.value;
                                                                setTbAgenda(novaAgenda);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={item.tempo}
                                                            onChange={(e) => {
                                                                const novaAgenda = [...tbAgenda];
                                                                novaAgenda[index].tempo = e.target.value;
                                                                setTbAgenda(novaAgenda);
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <select
                                                            id='status'
                                                            value={item.status}
                                                            onChange={(e) => {
                                                                const novaAgenda = [...tbAgenda];
                                                                novaAgenda[index].status = e.target.value;
                                                                setTbAgenda(novaAgenda);
                                                            }}
                                                        >
                                                            <option value="">Selecione...</option>
                                                            <option value="Aguardando">Aguardando</option>
                                                            <option value="Em Andamento">Em Andamento</option>
                                                            <option value="Finalizado">Finalizado</option>
                                                            <option value="Cancelado">Cancelado</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => bloquearHorario(index)}
                                                        >
                                                            {item.bloqueado ? "Desbloquear" : "Bloquear"}
                                                        </button>
                                                    </td>
                                                </tr>
                                                {item.vagas &&
                                                    item.vagas.map((vaga, vagaIndex) => (
                                                        <tr key={`${index}-${vagaIndex}`}>
                                                            <td className="vaga">{vaga.horario}</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    value={vaga.orc}
                                                                    onChange={(e) => {
                                                                        const novaAgenda = [...tbAgenda];
                                                                        novaAgenda[index].vagas[vagaIndex].orc = e.target.value;
                                                                        setTbAgenda(novaAgenda);
                                                                    }}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    value={vaga.estudo}
                                                                    onChange={(e) => {
                                                                        const novaAgenda = [...tbAgenda];
                                                                        novaAgenda[index].vagas[vagaIndex].estudo = e.target.value;
                                                                        setTbAgenda(novaAgenda);
                                                                    }}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    value={vaga.vaga}
                                                                    onChange={(e) => {
                                                                        const novaAgenda = [...tbAgenda];
                                                                        novaAgenda[index].vagas[vagaIndex].vaga = e.target.value;
                                                                        setTbAgenda(novaAgenda);
                                                                    }}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    value={vaga.tempo}
                                                                    onChange={(e) => {
                                                                        const novaAgenda = [...tbAgenda];
                                                                        novaAgenda[index].vagas[vagaIndex].tempo = e.target.value;
                                                                        setTbAgenda(novaAgenda);
                                                                    }}
                                                                />
                                                            </td>
                                                            <td>
                                                                <select
                                                                    id='status'
                                                                    value={vaga.status}
                                                                    onChange={(e) => {
                                                                        const novaAgenda = [...tbAgenda];
                                                                        novaAgenda[index].vagas[vagaIndex].status = e.target.value;
                                                                        setTbAgenda(novaAgenda);
                                                                    }}
                                                                >
                                                                    <option value="">Selecione...</option>
                                                                    <option value="Aguardando">Aguardando</option>
                                                                    <option value="Em Andamento">Em Andamento</option>
                                                                    <option value="Finalizado">Finalizado</option>
                                                                    <option value="Cancelado">Cancelado</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => removerVaga(index, vagaIndex)}
                                                                >
                                                                    Remover
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={enviarAgenda} className='modal-btn-agenda'>Salvar no Firebase</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};