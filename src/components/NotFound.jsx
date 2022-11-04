import React from 'react'
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div style={{textAlign:'center', marginBlock:50}}>
      <Link to={'servicos'}>Clique aqui para voltar</Link>
    </div>
  )
}

export default NotFound