function sortArrayByParity(A: number[]): number[] {
  let i: number = 0;
  let j: number = A.length - 1;

  while (i < j) {
    if (A[i] % 2 === 1 && A[j] % 2 === 1) {
      j--;
    } else if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      [A[j], A[i]] = [A[i], A[j]];
      i++;
      j--;
    } else if (A[i] % 2 === 0 && A[j] % 2 === 1) {
      i++;
      j--;
    } else {
      i++;
    }
  }

  return A;
}
