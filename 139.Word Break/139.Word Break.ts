function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length).fill(false);

  for (let i: number = 0; i < s.length; i++) {
    if (wordDict.indexOf(s.substring(0, i + 1)) !== -1) {
      dp[i] = true;
      continue;
    }

    for (let j: number = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j + 1, i + 1)) !== -1) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length - 1];
}
