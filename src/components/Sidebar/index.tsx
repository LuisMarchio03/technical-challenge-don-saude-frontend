import { styled } from '@stitches/react';
import { Link } from "react-router-dom";

import logoSvg from "../../assets/logo.svg"
import homeSvg from "../../assets/icons/sidebar/home.svg"
import serviceSvg from "../../assets/icons/sidebar/IdentificationBadge.svg"
import financialSvg from "../../assets/icons/sidebar/CurrencyDollar.svg"
import associatesSvg from "../../assets/icons/sidebar/UsersFour.svg"
import userSvg from "../../assets/icons/sidebar/user.svg"
import configSvg from "../../assets/icons/sidebar/GearSix.svg"
import arrowSvg from "../../assets/icons/sidebar/CaretDown.svg"


const SidebarMain = styled('aside', {
  width: '300px',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 1000,
  background: '#FFFFFF',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const SidebarLogo = styled('div', {
  width: '100%',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginBottom: '20px',

  '> img': {
    width: '180px'
  }
});

const Nav = styled('nav', {
  width: '100%',
  marginLeft: '100px',
})

const SidebarLinks = styled('div', {
  width: '200px',

  display: 'flex',
  flexDirection: 'column',
  gap: '50px',

  alignItems: 'center',
});



const SidebarLink = styled(Link, {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  
  textDecoration: 'none',
  color: "#121929",
  
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '14.63px',

  '> img': {
    width: '25px',
    height: '25px',
    marginBottom: '3px',

    '&.arrow': {
      width: '15px',
      height: '15px',
      marginLeft: '15px',
      marginBottom: '3px'
    }
  },

  '&.active': {
    background: "#D0005E",
    padding: "14px",
    color: "#FFFFFF",
    borderRadius: "24px"
  },
});

export const Sidebar = () => {
  return (
    <SidebarMain>
      <SidebarLogo>
        <img src={logoSvg} alt="Logo Don Saúde" />
      </SidebarLogo>

      <Nav>
        <SidebarLinks>
          <SidebarLink to="/">
            <img 
              src={homeSvg}
              alt="Vector Indicadores" 
            /> Indicadores
          </SidebarLink>

          <SidebarLink to="/">
            <img 
              src={serviceSvg}
              alt="Vector Atendimento" 
            /> Atendimento
          </SidebarLink>

          <SidebarLink to="/">
            <img 
              src={financialSvg}
              alt="Vector Financeiro" 
            /> Financeiro
          </SidebarLink>

          <SidebarLink 
            to="/"
            className='active'
          >
            <img 
              src={associatesSvg}
              alt="Vector Parceiros" 
            /> Parceiros
          </SidebarLink>

          <SidebarLink to="/">
            <img 
              src={userSvg}
              alt="Vector Usuários" 
            /> Usuários
          </SidebarLink>

          <SidebarLink to="/">
            <img 
              src={configSvg}
              alt="Vector Configurações" 
            /> 
            
            Configurações 
            
            <img 
              className='arrow'
              src={arrowSvg}
              alt="Vector Seta" 
            />
          </SidebarLink>
        </SidebarLinks>
      </Nav>
    </SidebarMain>
  )
}