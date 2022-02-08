
import { BASE_URL } from './constants/url';
import useRequestData from './hooks/useRequest';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(1);
  const loterias = useRequestData([], `${BASE_URL}/loterias`)
  const ConcursoLoteria = useRequestData([], `${BASE_URL}/loterias-concursos`)


  const onChangeLoteria = (event) => {
    setValue(event.target.value)
    console.log(value)
  }
  
  // console.log(ConcursoLoteria)

  console.log("loterias", loterias[0])
  return (
    <div>
      hello word
      <select onChange={onChangeLoteria}>

      {loterias ? loterias[0].map((loteria)=>{
        return <option value={loteria.id} >{loteria.nome}</option>
      }) : <p>carregando</p>}


      </select>
    </div>
  );
}

export default App;
