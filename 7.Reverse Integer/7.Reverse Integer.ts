function reverse(x: number): number {
  let min: number = Math.pow(-2, 31);
  let max: number = Math.pow(2, 31) - 1;

  let sign: number = Math.sign(x);

  x = Math.abs(x);

  let stringArray: Array<string> = x.toString().split("");

  let result: number = parseInt(stringArray.reverse().join(""));

  result = sign * result;
  if (result < min || result > max) {
    return 0;
  }

  return result;
}
