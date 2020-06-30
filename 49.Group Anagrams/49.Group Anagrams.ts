function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 0) {
    return [];
  }

  const map = new Map();

  for (let word of strs) {
    let lettersFrequencyArray: number[] = Array(26).fill(0);

    for (let i: number = 0; i < word.length; i++) {
      let ascii: number = word.charCodeAt(i) - 97;

      lettersFrequencyArray[ascii]++;
    }

    let key: string = lettersFrequencyArray.join("");

    if (map.has(key)) {
      map.set(key, [...map.get(key), word]);
    } else {
      map.set(key, [word]);
    }
  }

  let result: string[][] = [];

  for (let keyValue of map) {
    result.push(keyValue[1]);
  }

  return result;
}
