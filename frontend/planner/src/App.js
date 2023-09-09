import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPen , faTrash} from '@fortawesome/free-solid-svg-icons';

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
      <input id="descricao" type ="text" placeholder="descricao" />
      <button> + Atividade</button>
    </form>
   <div className='mt-3'>
      <ul className= "list-group">
        {atividades.map(ativ => (
        <div  key ={ativ.id} className="card mb-2 shadow" >
          <div  class="card-body">
          <div className="d-flex justify-content-between">
          <h5 className="card-title">
          <span className="bagde bg-secondary me-2" >
          {ativ.id}
          </span>
          - titulo
          </h5>
          <h6>
          Prioridade : 
          <span className="ms-1  text-black">
          <i className="me-1">
            <FontAwesomeIcon icon={faSmile} /> {/* Uso do ícone aqui */}
          </i>
          </span>
          Normal 
          </h6>
          </div>
          <p className="card-text">
            {ativ.descricao}
          </p>
          <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className="btn btn-sm btn-outline-primary">
          <i className="me-1">
          <FontAwesomeIcon icon={faPen} />
          </i>
            Editar
          </button>
          <button className="btn btn-sm  btn-outline-danger">
          <i className="me-1">
          <FontAwesomeIcon icon={faTrash} />
          </i>
            Deletar
          </button>
          </div>          
        </div>
      </div>
   
   ))}
      </ul>
    </div>
  
  </>
  );
}

export default App; 
