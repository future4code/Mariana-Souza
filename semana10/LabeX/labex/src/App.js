
import Router from "./route/Router";
import { MainContainer } from "./Style";
import './App.css'
import styled from "styled-components";
import {Header} from './components/Header/Header'

// const Header = styled.header`
//     height: 10vh;
//     width: 100vw;
//     border: 1px solid black;
//     background-color: #7a8eb7;
// `

function App() {
  return (
    <div>
      <Header/>
      <MainContainer>
        <Router />
      </MainContainer>

    </div>
    
    
  );
}

export default App;
