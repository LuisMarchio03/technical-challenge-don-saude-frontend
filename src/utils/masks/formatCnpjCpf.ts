const formatCnpj = (cnpj: string) => {
  // Removing all the non-numeric characters and convert to number
  const cleaned = Number(cnpj.replace(/\D/g, ''));

  if (!isNaN(cleaned)) {

    // Set the mask pattern XX.XXX.XXX/XXXX-XX
    const match = cleaned.toString().match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/);

    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}`;
    }
  }
  
  return cnpj;
}

const formatCpf = (cpf: string) => {
  // Remove all the characters that are not numbers
  const cleaned = cpf.replace(/\D/g, '');

  // verify if the CPF has 11 digits before formatting it
  if (cleaned.length !== 11) {
      return "CPF ou CNPJ inválido";
  }

  //  Set the mask pattern CPF (XXX.XXX.XXX-XX)
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export const cpfOrCnpj = (value: string) => {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length <= 11) {
    return formatCpf(cleaned);
  } else {
    return formatCnpj(cleaned);
  }
}