export const abbr = (firstName: string, lastName: string): string => {
  const firstSymbol = firstName.substr(0, 1);
  const secondSymbol = lastName.substr(0, 1);
  return (firstSymbol + secondSymbol).toUpperCase();
};