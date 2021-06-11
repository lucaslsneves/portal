import React from 'react';
import {shade} from 'polished';
import logo from '../../assets/logo.svg'
 import { Container } from './styles';
 import Switch from "react-switch";
function Header({setState,theme}) {
  return <Container>
    <div>
     <img src={logo} alt="Logo INTS"/>
     <h1>Portal de Indicadores</h1>
     </div>
  </Container>
}

export default Header;