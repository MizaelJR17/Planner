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
        <div className="card mb-2 shadow" style={{width: "18rem"}}>
          <div key ={ativ.id} class="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            {ativ.id} - {ativ.descricao}
          </p>
          
        </div>
      </div>
   
   ))}
      </ul>
    </div>
  
  </>
  );
}

export default App; 
