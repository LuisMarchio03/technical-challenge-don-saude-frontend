import { styled } from '@stitches/react';

export const MainCreateAssociate = styled('main', {
  width: '96%',
})

export const CreateAssociateFormContainer = styled('div', {
  width: '100%',
  background: "#FFFFFF",
  borderRadius: '20px',
})

export const CreateAssociateForm = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '20px',

  padding: '2%',
})

export const FormButtonsContainer = styled('div', {
  width: '93%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '20px',
  marginTop: '20px'
})

export const ButtonCancel = styled('button', {
  width: '250px',
  height: '45px',
  background: "#ffffff",
  border: "1px solid #D0D5DD",
  borderRadius: "20px",
  color: "#475467",

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  fontSize: '18px',

  cursor: 'pointer',
})

export const ButtonNext = styled('button', {
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