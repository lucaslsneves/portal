
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
            url="https://app.powerbi.com/groups/me/reports/36a677ff-ecbe-4d7d-a952-82092cfc50fb/ReportSection"
            title="Inventário de computadores da INTS"
            description="Dashboard de inventário de computadores"
            icon="desktop"
            color="#639cd9"
          />
           <Card
            url="https://app.powerbi.com/groups/me/reports/c3313ca5-55f3-438f-a218-c50d785c6f81/ReportSection9eec9aeed0040923d8ec"
            title="Projetos TIC - INTS"
            description="Dashboard para monitoramento dos projetos do setor de TI no Jira"
            color="#639cd9"
         
          />
        </CardSection>
        <h1>Administrativo</h1>
        <CardSection>
        <Card
            url="https://app.powerbi.com/groups/ccca8928-7804-4481-bc8d-1b9aba6f4eb4/reports/57b2e547-2db5-428b-8f3c-8eb0e19e2633/ReportSectione114d89fcfdc9056a9fc"
            title="Governança de Contratos - INTS"
            description="Dashboard de Governça de contratos"
            icon="file"

          />
      </CardSection>
       
      <h1>Contratos</h1>
      <CardSection>

      <Card
            url="https://app.powerbi.com/groups/2a893268-27c7-4c20-8719-9651255b402b/reports/0859cccd-3c5d-4e35-b5d8-f1dc698188c6/ReportSection"
            title="Financeiro - UPA Brotas"
            description="Dashboard de Gestão de contratos orçamentários"
            icon="money"
            color="#A6ECE0"
          />
          <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiMzJlYTA3ZjEtZDZkYy00MjgzLWFkMTAtOTA0MjVhZjk2OTVhIiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection3fca400e62f8c9805ef7"
            title="Financeiro - SACA"
            description="Dashboard Financeiro"
            icon="money"
            color="#A6ECE0"
           
          />
     
          <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiYTc5YzQ1OTMtNThmMi00ODMxLWFiNjUtMGMwNzhlOWM4ZDc5IiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection"
            title="NIP - SACA"
            description="Dashboard do Núcleo de informação e planejamento"
            color="#A6ECE0"
            icon="file"
          />

          <Card
            url="https://app.powerbi.com/view?r=eyJrIjoiY2U0MDA2NjctN2M1Yy00Zjg1LTlmN2ItYTdiOGVjNTllZjdiIiwidCI6IjMwYWExY2UxLTI1NjYtNDA3NS1iN2JlLTNmMjYzZDg5NzkwNSJ9&pageName=ReportSection4bf54491f47972c7581b"
            title="SAU - SACA"
            description="Dashboard de Serviço de Atendimento ao Usuário.
            O SAU é o canal de comunicação entre os pacientes e os serviços administrados pelo INTS"
            icon="file"
            color="#A6ECE0"
          />
        

        </CardSection>
       

        <h1>Covid</h1>
      <CardSection>
     
          <Card
            url="https://app.powerbi.com/links/EqBd1OQt18?ctid=a2f43ccf-3496-472c-afcd-274db12090e0&pbi_source=linkShare"
            title="Hospital Espanhol"
            description="Dashboard de controle Hospital Espanhol"
            icon={'hospital'}
            color="#f96d6d"
          />
          <Card
            url="https://app.powerbi.com/links/TXJRAdCPCu?ctid=a2f43ccf-3496-472c-afcd-274db12090e0&pbi_source=linkShare"
            title="Hospital Bertioga"
            description="Dashboard de controle Hospital Bertioga"
            icon={'hospital'}
            color="#f96d6d"
          />

          <Card
            url="https://app.powerbi.com/Redirect?action=openreport&context=Annotate&ctid=a2f43ccf-3496-472c-afcd-274db12090e0&pbi_source=mobile_android&groupObjectId=&appId=&reportObjectId=1a31e8f7-f964-443e-8cfd-8de292927b93&reportPage=ReportSection77872f4131907763d0d5&bookmarkGuid=11e8a297-feed-4caf-8df8-932ab085b502"
            title="Hospital Guarapiranga"
            description="Dashboard de controle Hospital Bertioga"
            icon={'hospital'}
            color="#f96d6d"
          />

<Card
            url="https://app.powerbi.com/view?r=eyJrIjoiMTUwNjk5YTAtOTFlNS00ZTg2LThmOWQtODhhN2MyN2IxMDg2IiwidCI6ImEyZjQzY2NmLTM0OTYtNDcyYy1hZmNkLTI3NGRiMTIwOTBlMCJ9&pageName=ReportSection"
            title="Vacinômetro da INTS"
            description="Dashboard para controle de colaboradores que já foram vacinados"
            icon={icons.health}
            color="#f96d6d"
          />

        </CardSection>

      
    
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
