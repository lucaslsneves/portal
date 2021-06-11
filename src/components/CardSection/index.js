import styled from 'styled-components';

const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  padding-bottom: 20px;

  @media(max-width: 750px) {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

export default CardSection;