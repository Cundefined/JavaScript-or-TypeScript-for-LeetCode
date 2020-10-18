function sortedSquares(A: number[]): number[] {
  const res: number[] = [];
  let left: number = 0;
  let right: number = A.length - 1;

  let resPointer: number = A.length - 1;

  while (left <= right) {
    if (A[left] * A[left] < A[right] * A[right]) {
      res[resPointer] = A[right] * A[right];
      right--;
    } else {
      res[resPointer] = A[left] * A[left];
      left++;
    }

    resPointer--;
  }

  return res;
};