function numIslands(grid: string[][]): number {
  
    let countIsland: number = 0;

    function dfs(row: number, col: number): void {
        if (row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1 || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    for (let row: number = 0; row < grid.length; row++) {
        for (let col: number = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                countIsland++;
                dfs(row, col);
            }
        }
    }

  return countIsland;
}
