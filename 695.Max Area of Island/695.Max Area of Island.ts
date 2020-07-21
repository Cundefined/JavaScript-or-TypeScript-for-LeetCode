function maxAreaOfIsland(grid: number[][]): number {
    if (grid.length === 0) {
        return 0;
      }
    
      let maxArea: number = 0;
    
      function dfs(row: number, col: number): number {

        if (
          row < 0 ||
          row > grid.length - 1 ||
          col < 0 ||
          col > grid[0].length - 1 ||
          grid[row][col] === 0
        ) {
          return 0;
        }

        grid[row][col] = 0;

        let currentArea: number = 1;
    
        currentArea += dfs(row - 1, col);
        currentArea += dfs(row + 1, col);
        currentArea += dfs(row, col - 1);
        currentArea += dfs(row, col + 1);
    
        return currentArea;
      }
    
      for (let row: number = 0; row < grid.length; row++) {
        for (let col: number = 0; col < grid[0].length; col++) {
          if (grid[row][col] === 1) {
            let currentArea: number = dfs(row, col);
            maxArea = Math.max(maxArea, currentArea);
          }
        }
      }
    
      return maxArea;
};