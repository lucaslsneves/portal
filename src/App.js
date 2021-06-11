
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
            description="Inventário de computadores da INTS."
          />
           <Card
            url="https://app.powerbi.com/groups/me/reports/71c8c20a-b0a0-465d-95a0-b0fc7c2c61a4"
            title="Dashboard do vacinômetro da INTS"
            description="Dashboard para controle de colaboradores que já foram vacinados"
          />
        </CardSection>
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
