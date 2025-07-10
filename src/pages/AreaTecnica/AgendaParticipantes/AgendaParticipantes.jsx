import React,{useState, useEffect}from 'react'
import './AgendaParticipantes.css'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import  Header  from '../../../components/HeaderGeral/HeaderGeral'
import  SideBar  from '../../../components/SideBar/SideBar'
import { useNavigate } from 'react-router-dom'


export const AgendaParticipantes = () => {

  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [setor, setSetor] = React.useState('selecione')
  const dataFormatada = selectedDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' }).split('/').reverse().join('-')

  const carregarAgenda = () => {
    const url = `https://agendamento-2fd8b-default-rtdb.firebaseio.com/agendas/${dataFormatada}/${setor}.json` // Replace with your API URL
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data) // Process the data as needed
      })
      .catch(error => {
        console.error('Error fetching agenda:', error)
      })
  }
  return (
    <div className='container-agenda-participantes'>
      <nav>
        <SideBar style={{ gridArea: "sidebar" }} />
        <Header style={{ gridArea: "header" }} /><hr />
      </nav>

      <div className="main-agenda-participantes">
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

          <button className='btn-gerar' onClick={() => { carregarAgenda() }}>Carregar Agenda</button>
        </div>


      </div>
    </div>
  )
}
