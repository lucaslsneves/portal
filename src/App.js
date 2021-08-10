
import { useState, useEffect } from 'react';
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { getAllCategories } from './services/dato-cms'
import Card from './components/Card';
import Header from './components/Header';
import AppContainer from './components/AppContainer';
import CardSection from './components/CardSection';
import CardSkeleton from './components/CardSkeleton';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SpecialH1 = styled.h1`
  margin-bottom: 0;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [categories, setCategories] = useState([]);

  const themes = {
    dark,
    light
  }

  useEffect(() => {
    getAllCategories().then((categories) => {
      categories.reverse()
      setCategories(categories)
      setTimeout(() => {
      setIsLoading(false)
        setError(false);
      }, 1000)

    }).catch((err) => {
      setIsLoading(false);
      setError(true);
      setCategories([])
    });
  }, [])


  if (isLoading) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <AppContainer>
          <Header setTheme={setTheme} theme={theme} />

          <SkeletonTheme color="#202020" highlightColor="#444">
            <div className="wrapper-skeleton">
              <Skeleton height={30} width={250} />
            </div>
            <CardSection>

              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />

            </CardSection>
            <CardSection>

              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />

            </CardSection>
          </SkeletonTheme>
        </AppContainer>
        <GlobalStyle />
      </ThemeProvider>
    )
  } else if (error) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <AppContainer>
          <Header setTheme={setTheme} theme={theme} />
          <h1>Erro inesperado</h1>
        </AppContainer>
        <GlobalStyle />
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider theme={themes[theme]}>
        <AppContainer>
          <Header setTheme={setTheme} theme={theme} />
          {categories.map(category => (
            <>
              <h1>{category.title}</h1>
              <CardSection>
                {
                  category.indicators.map(indicator => (
                    <Card
                      url={indicator.url}
                      title={indicator.title}
                      description={indicator.description}
                      icon={indicator.icon.name}
                      color={category.color.hex}
                    />
                  ))
                }
              </CardSection>
            </>
          ))}
          <GlobalStyle />
        </AppContainer>
      </ThemeProvider>

    );
  }

}

export default App;
