function isAnagram(s: string, t: string): boolean {
  if (s.length === 0 && t.length === 0) {
    return false;
  }

  if (s.length !== t.length) {
    return false;
  }

  const map: Map<string, number> = new Map();

  for (let i: number = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }

    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      map.set(t[i], -1);
    }
  }

  for (let keyValue of map) {
    if (keyValue[1] !== 0) {
      return false;
    }
  }

  return true;
}
