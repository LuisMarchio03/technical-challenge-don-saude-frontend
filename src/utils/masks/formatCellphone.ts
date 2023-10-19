export const formatCellphone = (number: string) => {
  // Remove all the characters that are not a number
  const cleaned = number.replace(/\D/g, '');

  // Verify that the number is a valid number
  if (cleaned.length !== 9) {
    return "Número de celular inválido";
  }

  // Set the mask pattern for US (9XXXX-XXXX)
  return cleaned.replace(/(\d{1})(\d{4})(\d{4})/, '9$1-$2-$3');
}