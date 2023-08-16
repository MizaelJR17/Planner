import React, { useState } from 'react';
import './App.css';



let initialState =[
  {
    id: 1,
    descricao:'Primeira atividade'
  },
  {
    id: 1,
    descricao:'Segunda atividade'
  }
];

function App() {
  const [atividades, setAtividades] = useState(initialState)
   
  return (
   <>
    <form>
      <input id="id" type ="text" placeholder="id"/>
      <input id="descricao" type ="text" placeholder="descricao"/>
      <button> + Atividade</button>
    </form>
   <div className='mt-3'>
      <ul className= "list-group">
        {atividades.map(ativ => (
        <li key ={ativ.id} className='list-group-item'>{ativ.id} - {ativ.descricao}</li>
        ))}
      </ul>
    </div>
  
  </>
  );
}

export default App; 
