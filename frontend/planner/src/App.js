import React, { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

let initialState = [
  {
    id: 1,
    prioridade: 'baixa',
    titulo: 'Primeira Atividade',
    descricao: 'Primeira atividade',
  },
  {
    id: 2,
    prioridade: 'baixa',
    titulo: 'Segunda Atividade',
    descricao: 'Segunda atividade',
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);
 const [idCounter, setIdCounter] = useState(3);

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('inputState').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    };
    setAtividades([ ...atividades, { ...atividade }]);
    setIdCounter(idCounter + 1);
  }
  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
   setAtividades([ ...atividadesFiltradas]);
  }
  



  return (
    <>
      <AtividadeForm 
      addAtividade={addAtividade} 
      atividades={atividades}/>
      
      <div className='mt-3'>
        <ul className="list-group">
          {atividades.map((ativ) => (
           <Atividade 
           key={ativ.id} 
           ativ={ativ}
           deletarAtividade={deletarAtividade}/>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
