import {useEffect,useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
function Filme(){
  const { id } = useParams();
  return(
    <div>
      <h1>BEM VINDO A PAGINA DETALHES DO FILME {id}</h1>
    </div>
  )
}

export default Filme;