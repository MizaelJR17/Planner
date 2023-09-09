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

  function addAtvidades(e){
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value ,


    };
    setAtividades([...atividades,{...atividade}]);
  }
  



  return (
   <>
    <form className='row g-3'>
      <div className='col-md-6'>
        <label className='form-label'>
          Id
        </label>
        <input id="id" type ="text" className='form-control'/>
      </div>
        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select id="inputState" className="form-control">
            <option defaltValue="0">Selecione ...</option>
            <option defaltValue="1">Baixa</option>
            <option defaltValue="2">Normal</option>
            <option defaltValue="3">Alta</option>
          </select>
        </div>

      <div className='col-md-6'>
        <label className='form-label'>
          Título
        </label>
      <input id="titulo" type ="text" className='form-control'/>
      </div>
      
      
      <div className='col-md-6'>
        <label className='form-label'>
          Descrição
        </label>
      <input id="descricao" type ="text" className='form-control'/>
      </div>
      
      <div class='col-12'>
      <button className='btn btn-outline-secondary'> 
        + Atividade
      </button>
      </div>
     
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
