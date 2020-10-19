function permutation(s: string): string[] {
  const res: Set<string> = new Set<string>();
  const isVisited: boolean[] = [];

  dfs("", s, isVisited, res);
  return [...res];

}

function dfs(path: string, s: string, isVisited: boolean[], res: Set<string>): void {
  // 递归结束条件
  if (path.length === s.length) {
    //path装满就加入结果数组
    res.add(path);
    return;
  }

  //递归主体，依次选择s中的每个字符
  for (let i: number = 0; i < s.length; i++) {
    //去重
    if (isVisited[i] === true) {
      continue;
    }

    isVisited[i] = true;
    path = path + s[i];
    dfs(path, s, isVisited, res);
    isVisited[i] = false;
    //回溯
    path = path.substring(0, path.length - 1);
  }
}
