import React from 'react';

export default function AtividadeForm(props) {
  return (
    <form className='row g-3'>
    <div className='col-md-6'>
      <label className='form-label'>Id</label>
      <input id="id"
       type="text" 
       className='form-control' 
      readOnlys
      value={
        Math.max.apply(
         Math,
        props.atividades.map((item => item.id))
         ) + 1
        }
      />
    </div>
    <div className='col-md-6'>
      <label className='form-label'>Prioridade</label>
      <select id="inputState" className="form-control" defaultValue="0">
        <option value="0">Selecione ...</option>
        <option value="1">Baixa</option>
        <option value="2">Normal</option>
        <option value="3">Alta</option>
      </select>
    </div>
    <div className='col-md-6'>
      <label className='form-label'>Título</label>
      <input id="titulo" type="text" className='form-control' />
    </div>

    <div className='col-md-6'>
      <label className='form-label'>Descrição</label>
      <input id="descricao" type="text" className='form-control' />
    </div>

    <div className='col-12'>
      <button className='btn btn-outline-secondary' onClick={props.addAtividade}>
        + Atividade
      </button>
    </div>
  </form>
  )
}
