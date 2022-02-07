
import { render } from '@testing-library/react';
import { BASE_URL } from './constants/url';
import useRequestData from './hooks/useRequest';

function App() {
  const loterias = useRequestData([], `${BASE_URL}/loterias`)

  

  console.log("loterias", loterias[0])
  return (
    <div>
      hello word
      {loterias ? loterias[0].map((loteria)=>{
      return <p>{loteria.nome}</p>
      }) : <p>carregando</p>}
    </div>
  );
}

export default App;
