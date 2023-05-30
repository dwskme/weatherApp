const convertC = (x: number) => x - 273.15;

const convertF = (x: number) => convertC(x) * 1.8 + 32;

export { convertC, convertF };
