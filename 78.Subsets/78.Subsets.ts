function subsets(nums: number[]): number[][] {

let result: number[][] = [];

function dfs(originArray: number[], currStartNode: number[], currStartIndex: number): void {

  result.push([...currStartNode]);

  for (let i: number = currStartIndex; i < originArray.length; i++) {

    currStartNode.push(originArray[i]);

    dfs(originArray, currStartNode, i + 1);

    currStartNode.pop();
  }
}


dfs(nums, [], 0);
return result;
}