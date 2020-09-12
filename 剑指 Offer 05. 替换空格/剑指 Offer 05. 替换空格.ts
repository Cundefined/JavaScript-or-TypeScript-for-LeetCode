function replaceSpace(s: string): string {
  if (s.length === 0) {
    return s;
  }

  let newStr: string = "";

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === " ") {
      newStr += "%20";
    } else {
      newStr += s[i];
    }
  }

  return newStr;
}
