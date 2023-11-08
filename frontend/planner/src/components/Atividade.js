import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';



export default function Atividade(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3': 
        return 'Alta';
        default:
        return 'Não definido';
    }
  }

  function prioridadeStyle(param, icone) {
    switch (param) {
      case '1':
        return icone ? 'smile' : 'success';
      case '2':
        return icone ? 'meh' : 'dark';
      case '3':
        return icone ? 'frown' : 'warning';
      default:
        return 'Não definido';
    }
  }
  return (
    <div key={props.ativ.id} className={'card mb-2 shadow-sm border-'+prioridadeStyle(props.ativ.prioridade)}>
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                    <span className="bagde bg-secondary me-2">
                      {props.ativ.id}
                    </span>
                    {props.ativ.titulo}
                  </h5>
                  <h6>
                    Prioridade :{' '}
                    <span className="ms-1 text-black">
                      <i className={"me-1 " + prioridadeStyle(props.ativ.prioridade)}>
                        <FontAwesomeIcon icon={faSmile} />
                        {prioridadeLabel(props.ativ.prioridade)}
                      </i>
                    </span>
                    {props.ativ.prioridade}
                  </h6>
                </div>
                <p className="card-text">{props.ativ.descricao}</p>
                <div className="d-flex justify-content-end pt-2 m-0 border-top">
                  <button className="btn btn-sm btn-outline-primary" onClick={()=> props.deletarAtividade(props.ativ.id)}>
                    <i className="me-1">
                      <FontAwesomeIcon icon={faPen}/>
                    </i>
                    Editar
                  </button>
                  <button className="btn btn-sm  btn-outline-danger" 
                  onClick={()=> props.deletarAtividade(props.ativ.id)}>
                    <i className="me-1">
                      <FontAwesomeIcon icon={faTrash}/>
                    </i>
                    Deletar
                  </button>
                </div>
              </div>
            </div>
  )
}
