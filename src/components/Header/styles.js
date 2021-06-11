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
`;
