function romanToInt(input: string): number {
  let total = 0;

  input.split("").forEach((char) => {
    if (char === "I") total += 1;
    if (char === "V") total += 5;
    if (char === "X") total += 10;
    if (char === "L") total += 50;
    if (char === "C") total += 100;
    if (char === "D") total += 500;
    if (char === "M") total += 1000;
  });

  if (input.indexOf("IV") >= 0) total -= 2;
  if (input.indexOf("IX") >= 0) total -= 2;
  if (input.indexOf("XL") >= 0) total -= 20;
  if (input.indexOf("XC") >= 0) total -= 20;
  if (input.indexOf("CD") >= 0) total -= 200;
  if (input.indexOf("CM") >= 0) total -= 200;

  return total;
}

export default romanToInt;
