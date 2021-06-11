
import { useState } from 'react';
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Card from './components/Card';
import Header from './components/Header';
import AppContainer from './components/AppContainer';
import CardSection from './components/CardSection';

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

        <CardSection>
          <Card
            url="https://app.powerbi.com/groups/me/reports/26311468-e27e-4724-8e50-c6d9271eb6fd/ReportSection25dafee6c7070657804b"
            title="D-TIC_PROJETOS_V2"
            description="Dashboard para monitoramento dos projetos no JIRA."
          />
          <Card
            url="https://app.powerbi.com/groups/me/reports/c3313ca5-55f3-438f-a218-c50d785c6f81/ReportSection9eec9aeed0040923d8ec"
            title="D-TIC_PROJETOS"
            description="Dashboard para monitoramento dos projetos no JIRA."
          />
          <Card
            url="https://app.powerbi.com/groups/me/reports/36a677ff-ecbe-4d7d-a952-82092cfc50fb/ReportSection"
            title="D-TIC_ATIVOS"
            description="Dashboard de inventário de computadores da INTS."
          />
           <Card
            url="https://app.powerbi.com/groups/me/reports/71c8c20a-b0a0-465d-95a0-b0fc7c2c61a4"
            title="Vacinômetro da INTS"
            description="Dashboard para controle de colaboradores que já foram vacinados"
          />
          <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiYTc5YzQ1OTMtNThmMi00ODMxLWFiNjUtMGMwNzhlOWM4ZDc5IiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection"
            title="NIP - SACA"
            description="Dashboard do Núcleo de informação e planejamento - INTS Região SACA"
          />
             <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiMzJlYTA3ZjEtZDZkYy00MjgzLWFkMTAtOTA0MjVhZjk2OTVhIiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection3fca400e62f8c9805ef7"
            title="Financeiro - SACA"
            description="Dashboard Financeiro - INTS Região SACA"
          />
             <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiY2U0MDA2NjctN2M1Yy00Zjg1LTlmN2ItYTdiOGVjNTllZjdiIiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection4bf54491f47972c7581b"
            title="SAU - SACA"
            description="SAU - INTS Região SACA"
          />
         
       
        </CardSection>
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
