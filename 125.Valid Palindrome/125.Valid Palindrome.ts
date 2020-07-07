function isPalindrome(s: string): boolean {
  let newStr: string = "";

  newStr = s.toLowerCase().replace(/[\W_]/g, "");

  if (newStr.length <= 1) {
    return true;
  }

  let left: number = 0;
  let right: number = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
