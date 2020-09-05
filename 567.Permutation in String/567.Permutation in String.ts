function checkInclusion(s1: string, s2: string): boolean {
  const len1: number = s1.length;
  const len2: number = s2.length;

  const charArr1: number[] = new Array(26).fill(0);
  const charArr2: number[] = new Array(26).fill(0);

  function isEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i: number = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }

  function asciiCodeDiff(char1: string, char2: string): number {
    return char1.charCodeAt(0) - char2.charCodeAt(0);
  }

  for (const char of s1) {
    charArr1[asciiCodeDiff(char, "a")]++;
  }

  for (let i: number = 0; i < len2; i++) {

    if (i - len1 >= 0) {
      charArr2[asciiCodeDiff(s2[i - len1], "a")]--;
    }

    charArr2[asciiCodeDiff(s2[i], "a")]++;

    if (isEqual(charArr1, charArr2)) {
      return true;
    }
  }

  return false;
}
