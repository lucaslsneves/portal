import React from 'react';
import { MdDashboard} from 'react-icons/md';
import {RiArrowRightSLine} from 'react-icons/ri';
import { HiOutlineDocumentReport } from 'react-icons/hi';

import { Container, ContentContainer, ImgContainer } from './styles';

function Card({ url, img, title, description, type = 'dashboard' }) {
  return (
    <Container>
      <ImgContainer>
        {type === 'dashboard' ? <MdDashboard size={120}  /> : <HiOutlineDocumentReport size={120}  />}
      </ImgContainer>

      <ContentContainer>
        <h1>{title}</h1>
        <p>{description}</p>
        <a rel="noreferrer" href={url} target="_blank">
          Abrir
          <RiArrowRightSLine size={20} color="#222"/>
          </a>
      </ContentContainer>
    </Container>
  )
}

export default Card;