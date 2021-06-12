
import { useState } from 'react';
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { icons } from './types/icons';
import Card from './components/Card';
import Header from './components/Header';
import AppContainer from './components/AppContainer';
import CardSection from './components/CardSection';

import styled from 'styled-components';

export const SpecialH1 = styled.h1`
  margin-bottom: 0;
`;

function App() {
  const [theme, setTheme] = useState('dark');

  const themes = {
    dark,
    light
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer>
        <Header setTheme={setTheme} theme={theme} />

        <h1>TIC</h1>
        <CardSection>
          <Card
            url="https://app.powerbi.com/groups/me/reports/26311468-e27e-4724-8e50-c6d9271eb6fd/ReportSection25dafee6c7070657804b"
            title="Projetos TIC - INTS (v2)"
            description="Dashboard para monitoramento dos projetos do setor de TI no JIRA."
            color="#639cd9"
          />
         
          <Card
            url="https://app.powerbi.com/groups/me/reports/36a677ff-ecbe-4d7d-a952-82092cfc50fb/ReportSection"
            title="Inventário de computadores da INTS"
            description="Dashboard de inventário de computadores da INTS."
            icon="desktop"
            color="#639cd9"
          />
           <Card
            url="https://app.powerbi.com/groups/me/reports/c3313ca5-55f3-438f-a218-c50d785c6f81/ReportSection9eec9aeed0040923d8ec"
            title="Projetos TIC - INTS (v1)"
            description="Dashboard para monitoramento dos projetos do setor de TI no JIRA."
            color="#639cd9"
          />
        </CardSection>
        <h1>Financeiro</h1>
        <CardSection>
          <Card
            url="https://app.powerbi.com/groups/2a893268-27c7-4c20-8719-9651255b402b/reports/0859cccd-3c5d-4e35-b5d8-f1dc698188c6/ReportSection"
            title="Financeiro - UPA Brotas"
            description="Dashboard de Gestão de contratos orçamentários - UPA BROTAS"
            icon="money"

          />
          <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiMzJlYTA3ZjEtZDZkYy00MjgzLWFkMTAtOTA0MjVhZjk2OTVhIiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection3fca400e62f8c9805ef7"
            title="Financeiro - SACA"
            description="Dashboard Financeiro - INTS Região SACA"
            icon="money"
           
          />
          <Card
            url="https://app.powerbi.com/groups/ccca8928-7804-4481-bc8d-1b9aba6f4eb4/reports/cd9d42fc-c06f-4b3b-8ea5-3967272bbb9c/ReportSectione114d89fcfdc9056a9fc"
            title="Governança de Contratos - INTS"
            description="Dashboard de Governça de contratos - INTS"
            icon="money"
       
          />
      </CardSection>
      <h1>Pessoal</h1>
      <CardSection>
          <Card
            url="https://app.powerbi.com/groups/me/reports/71c8c20a-b0a0-465d-95a0-b0fc7c2c61a4"
            title="Vacinômetro da INTS"
            description="Dashboard para controle de colaboradores que já foram vacinados"
            icon={icons.health}
            color="#f96d6d"
          />
          <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiYTc5YzQ1OTMtNThmMi00ODMxLWFiNjUtMGMwNzhlOWM4ZDc5IiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection"
            title="NIP - SACA"
            description="Dashboard do Núcleo de informação e planejamento - INTS Região SACA"
            color="#f96d6d"
          />

          <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiY2U0MDA2NjctN2M1Yy00Zjg1LTlmN2ItYTdiOGVjNTllZjdiIiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection4bf54491f47972c7581b"
            title="SAU - SACA"
            description="Dashboard de Serviço de Atendimento ao Usuário.
            O SAU é o canal de comunicação entre os pacientes e os serviços administrados pelo INTS - INTS Região SACA"
            icon="person"
            color="#f96d6d"
          />




        </CardSection>
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
