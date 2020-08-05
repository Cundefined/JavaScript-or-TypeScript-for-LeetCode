function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  let limit: number = haystack.length - needle.length;


  for (let i: number = 0; i <= limit; i++) {

    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};