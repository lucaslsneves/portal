import React from 'react';
import { MdDashboard,MdPerson,MdAttachMoney} from 'react-icons/md';

import {RiSyringeFill} from 'react-icons/ri';



import {AiFillFile} from 'react-icons/ai';

import {GiWifiRouter} from 'react-icons/gi';

import {FaDesktop,FaHospitalAlt} from 'react-icons/fa';


import { Container, ContentContainer, ImgContainer } from './styles';

function Card({ url,  title, description, type = 'dashboard',color = "#368a58",icon= 'project' }) {
  
  function setIcon() {
    let Icon;
    switch (icon) {
      case 'syringe':
        Icon = <RiSyringeFill size={120}/>
        break;
      case 'dashboard':
        Icon = <MdDashboard size={120 }/>
        break;
        case 'pc':
          Icon = <FaDesktop size={120 }/>
          break;
      case 'money':
        Icon = <MdAttachMoney size={120}/>
        break;
      case 'person':
        Icon = <MdPerson size={120}/>
        break;
      case 'hospital':
        Icon = <FaHospitalAlt size={120}/>
        break;
      case 'file':
        Icon = <AiFillFile size={120}/>
        break;
      case 'wifi-router':
        Icon = <GiWifiRouter size={132}/>
        break;
      default:
        break;
    }
    return Icon;
  }
  return (
    <Container color={color} rel="noreferrer" href={url} target="_blank">
      <div>
      <ImgContainer>
        {setIcon()}
      
       
      </ImgContainer>

      <ContentContainer color={color}>
        <h2>{title}</h2>
        <p>{description}</p>
        
      </ContentContainer>
      </div>
    </Container>
  )
}

export default Card;