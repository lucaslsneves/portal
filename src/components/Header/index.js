import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg'
 import { Container } from './styles';

 export const SpecialH1 = styled.h1`
  margin-bottom: 0;
`;
function Header({setState,theme}) {
  return <Container>
    <div>
     <img src={logo} alt="Logo INTS"/>
     <SpecialH1>Portal de Indicadores</SpecialH1>
     </div>
  </Container>
}

export default Header;