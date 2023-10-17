import { styled } from '@stitches/react';
import { Link } from "react-router-dom";

export const SidebarMain = styled('aside', {
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

export const SidebarLogo = styled('div', {
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

export const Nav = styled('nav', {
  width: '100%',
  marginLeft: '100px',
})

export const SidebarLinks = styled('div', {
  width: '200px',

  display: 'flex',
  flexDirection: 'column',
  gap: '50px',

  alignItems: 'center',
});

export const SidebarLink = styled(Link, {
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