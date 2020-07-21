function totalFruit(tree: number[]): number {

  const map: Map<number, number> = new Map();

  let i: number = 0;
  let fruitOnePostion: number = 0;

  let fruitMaxCount: number = 1;

  for (i; i < tree.length; i++) {

    map.set(tree[i], i);

    if (map.size > 2) {
      let minIndex: number = tree.length - 1;

      for (let [fruit, index] of map) {
        if (index < minIndex) {
          minIndex = index;
        }
      }

      map.delete(tree[minIndex]);

      fruitOnePostion = minIndex + 1;
    }

    fruitMaxCount = Math.max(fruitMaxCount, i - fruitOnePostion + 1);
  }

  return fruitMaxCount;
};