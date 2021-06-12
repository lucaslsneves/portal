import styled from 'styled-components';
import {darken} from 'polished';
export const Container = styled.a`
  width: 300px;
  height: 350px;
  border-radius: 4px;
  background-color: #202024;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 200ms;
  text-align: center;
  border: 3px solid transparent;
  
  svg {
     // color: #656464;
     color:#a8a8b3;
  }
  &:hover {
    border: 3px solid ${props => props.color};

    svg {
      color: ${props => props.color};
  }
  }

  @media(max-width: 750px) {
    margin-bottom: 20px;
    width: 90%;
    max-width: 450px;
  }
  
`;

export const ImgContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 180;
`;

export const ContentContainer = styled.div`
padding: 10px;
display: flex;
height: 100%;
//background-color: #f9fafb;
flex-direction: column;
align-items: center;
//border-top: 1px solid #ddd;
color:#a8a8b3;
  h1 {
      font-size: 20px;
    //  color:#656464;
    color:#e1e1e6;
  }

  p {
      font-size: 16px;
      text-align:center;
      margin:10px 0;
    
  }

  a {   
    margin-top: auto;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      width:100%;
      padding: 10px 20px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
      color: #222;
      background-color: ${props => props.color};
      transition: 200ms;

  }
`;