import styled from 'styled-components';

const AppContainer = styled.div`
    max-width: 1080px;
    padding-top: 20px;
    margin: 0 auto;

    > .css-1qtlriq-SkeletonTheme span {
        text-align: center;
        margin-bottom: 20px;

    }

    @media(max-width: 750px) {
        .wrapper-skeleton {
            display: flex;
            justify-content: center;
        }
  }
   
`;

export default AppContainer;