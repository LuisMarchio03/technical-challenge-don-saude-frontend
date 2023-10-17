import { styled } from '@stitches/react';

export const InputContainer = styled('div', {
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const Label = styled('label', {
  fontSize: '16px',
  fontWeight: '500',
  marginLeft: '5px',
})

export const Input = styled('input', {
  width: '96%',
  height: '32px',
  border: '1px solid #D0D5DD',
  borderRadius: '15px',
  padding: "8px",
})

export const Select = styled('select', {
  width: '99%',
  height: '49px',
  border: '1px solid #D0D5DD',
  borderRadius: '15px',
  padding: "8px",
  background: "#fff"
})

export const Option = styled('option', {
  width: '100%',
  height: '40px',
  border: '1px solid #D0D5DD',
  borderRadius: '20px',
  padding: "8px"
})
