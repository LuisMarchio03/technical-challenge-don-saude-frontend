import { Nav, SidebarLink, SidebarLinks, SidebarLogo, SidebarMain } from "./styles"

import logoSvg from "../../assets/logo.svg"
import homeSvg from "../../assets/icons/sidebar/home.svg"
import serviceSvg from "../../assets/icons/sidebar/IdentificationBadge.svg"
import financialSvg from "../../assets/icons/sidebar/CurrencyDollar.svg"
import associatesSvg from "../../assets/icons/sidebar/UsersFour.svg"
import userSvg from "../../assets/icons/sidebar/user.svg"
import configSvg from "../../assets/icons/sidebar/GearSix.svg"
import arrowSvg from "../../assets/icons/sidebar/CaretDown.svg"

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