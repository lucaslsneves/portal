import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  div {
    display: flex;
    align-items: center;
  }
  img {
    padding-right: 15px;
    width:100px;
    border-right: 2px solid #e1e1e6;
  }
  h1 {
    margin-left: 15px;
    font-weight: 400;
    color:#e1e1e6;
  }
  @media(max-width: 750px) {
    justify-content: center;
    img {
      border: 0;
      margin-bottom:10px;
    }
    div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
    display: flex;
    width: 100%;
    align-items: center;
    
  }
`;
