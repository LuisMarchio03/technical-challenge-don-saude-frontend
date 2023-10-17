import { styled } from '@stitches/react';

export const MainAssociatesList = styled('main', {
  width: '96%',
})

export const AssociatesTitleContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  marginBottom: '30px'
})

export const Title = styled('p', {
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '29.26px',

  "> a": {
    color: "#101828",
    textDecoration: 'none',
  },

  "img": {
    width: '10px',
    marginRight: '15px',
    marginTop: '-2px',
  }
})

export const ButtonAddNewAssociate = styled('button', {
  width: '250px',
  height: '45px',
  background: "#D0005E",
  border: "none",
  borderRadius: "20px",
  color: "#FFFFFF",

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  fontSize: '18px',

  cursor: 'pointer',
})

export const ContentAssociatesList = styled('section', {
  width: '100%',
  background: "#FFFFFF",
  padding: "2%",

  borderRadius: '20px',
})

export const HeaderAssociatesList = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px'
})

export const InputSearch = styled('label', {
  position: 'relative',
  width: '400px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #D0D5DD',
  borderRadius: '40px',
  padding: '10px 20px',
  color: '#101828',
});

export const Input = styled('input', {
  flex: '1',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  marginLeft: '10px',
})

/* TABLE */

export const TableAssociates = styled('table', {
  minWidth: '100%',
})

export const Thead = styled('thead', {
  backgroundColor: '#ffffff', 
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
})

export const Tr = styled('tr', {
  paddingTop: '1rem',
  paddingBottom: '1rem', 
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem', 
  color: '#111827',
  fontSize: '0.875rem',
  lineHeight: '1.25rem', 
  fontWeight: '500',
  textAlign: 'left', 
})

export const Th = styled('th', {
  fontSize: '1rem',

  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: '#D0D5DD',

  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#D0D5DD',

  paddingTop: '1.2rem',
  paddingBottom: '1.2rem',
})

export const Tbody = styled('tbody', {})

export const Td = styled('td', {
  paddingTop: '1.2rem',
  paddingBottom: '1.2rem',
  color: '#101828',

  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#D0D5DD',

  fontSize: '15px',
  fontWeight: '500',

  '&.name_associate': {
    display: 'flex',
    flexDirection: 'column',
    
    '> p': {
      fontWeight: '600',
      fontSize: '16px',
    },

    '> span': {
      fontWeight: '400',
      fontSize: '14px',
    }
  }
})

export const Actions = styled('td', {
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  
  "> span.edit": {
    fontWeight: '600',
    fontSize: '16px',
    color: '#d97706',
    cursor: 'pointer',
  },

  "> span.delete": {
    fontWeight: '600',
    fontSize: '16px',
    color: '#D0005E',
    cursor: 'pointer',
  }
})

export const TFooter = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const TableLimit = styled('p', {
  width: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '20px',

  "> select": {
    borderRadius: '30px',
    padding: '8px',

    fontWeight: '600',

    background: "#EAECF0",
    border: '1px solid #D0D5DD'
  }
})

export const Pagination = styled('div', {
  fontSize: '16px',
  fontWeight: '500',
  display: 'flex',
  gap: '10px',

  marginTop: '20px',

  "> img": {
    width: '8px',
  }
})