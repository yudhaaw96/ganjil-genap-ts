type Type = (input: number) => boolean;

export const genap:    Type = input => ([0, 2, 4, 6, 8].includes(Number(String(input)[String(input).length - 1])) && input == Math.floor(input)) ? true : false;
export const bukanGenap: Type = input => !genap(input) ? true : false; 
export const ganjil:     Type = input => bukanGenap(input) && input == Math.floor(input) ? true : false;
export const bukanGanjil:  Type = input => !ganjil(input) ? true : false;