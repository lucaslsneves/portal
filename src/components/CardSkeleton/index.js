import React from 'react';

import Skeleton from 'react-loading-skeleton';
import { Container, ContentContainer, ImgContainer } from './styles';

function CardSkeleton() {


  return (
    <Container>
      <div>
        <ImgContainer>
          <Skeleton circle={true} width={120} height={120} />
        </ImgContainer>

        <ContentContainer>
          <Skeleton  width={250} height={20}/>
          <Skeleton  width={250} height={20}/>
        </ContentContainer>
      </div>
    </Container>
  )
}

export default CardSkeleton;