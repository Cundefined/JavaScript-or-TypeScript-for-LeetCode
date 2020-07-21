function backspaceCompare(S: string, T: string): boolean {
  let i: number = S.length - 1;
  let j: number = T.length - 1;

  let backspaceS: number = 0;
  let backspaceT: number = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (S[i] === "#") {
        backspaceS++;
        i--;
      } else if (backspaceS > 0) {
        backspaceS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (T[j] === "#") {
        backspaceT++;
        j--;
      } else if (backspaceT > 0) {
        backspaceT--;
        j--;
      } else {
        break;
      }
    }

    if (S[i] !== T[j]) {
      return false;
    }

    i--;
    j--;
  }

  return true;
}
