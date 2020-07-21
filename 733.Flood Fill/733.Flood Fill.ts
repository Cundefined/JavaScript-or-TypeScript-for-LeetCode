function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  if (image.length === 0) {
    return [];
  }

  if (image.length === 1 && image[0].length === 1) {
    image[sr][sc] = newColor;
    return image;
  }

  if (image[sr][sc] === newColor) {
    return image;
  }

  let oldColor: number = image[sr][sc];

  function dfs(sr: number, sc: number): void {
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== oldColor
    ) {
      return;
    }

    image[sr][sc] = newColor;

    dfs(sr - 1, sc);
    dfs(sr + 1, sc);
    dfs(sr, sc - 1);
    dfs(sr, sc + 1);
  }

  dfs(sr, sc);

  return image;
}
