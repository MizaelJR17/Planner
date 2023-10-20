import React from 'react';

export default function Atividade() {
  return (
    <div key={ativ.id} className={'card mb-2 shadow-sm border-'+prioridadeStyle(ativ.prioridade)}>
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                    <span className="bagde bg-secondary me-2">
                      {ativ.id}
                    </span>
                    {ativ.titulo}
                  </h5>
                  <h6>
                    Prioridade :{' '}
                    <span className="ms-1 text-black">
                      <i className={"me-1 " + prioridadeStyle(ativ.prioridade)}>
                        <FontAwesomeIcon icon={faSmile} />
                        {prioridadeLabel(ativ.prioridade)}
                      </i>
                    </span>
                    {ativ.prioridade}
                  </h6>
                </div>
                <p className="card-text">{ativ.descricao}</p>
                <div className="d-flex justify-content-end pt-2 m-0 border-top">
                  <button className="btn btn-sm btn-outline-primary" onClick={()=> deletarAtividade(ativ.id)}>
                    <i className="me-1">
                      <FontAwesomeIcon icon={faPen}/>
                    </i>
                    Editar
                  </button>
                  <button className="btn btn-sm  btn-outline-danger" 
                  onClick={()=> deletarAtividade(ativ.id)}>
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
