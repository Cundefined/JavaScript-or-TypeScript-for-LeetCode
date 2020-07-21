function sortArrayByParityII(A: number[]): number[] {
  let even: number = 0;
  let odd: number = 1;

  for (even; even < A.length; even += 2) {
    if (A[even] % 2 === 1) {
      while (A[odd] % 2 === 1 && odd < A.length) {
        odd += 2;
      }

      [A[even], A[odd]] = [A[odd], A[even]];
    }
  }

  return A;
}
