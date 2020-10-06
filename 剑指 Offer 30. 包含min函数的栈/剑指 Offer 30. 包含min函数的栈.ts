interface MinStackElementObj {
  element: number;
  min: number;
}

class MinStack {
  minStackItems: Array<MinStackElementObj>;
  constructor() {
    this.minStackItems = [];
  }

  push(x: number): void {
    let elementObj: MinStackElementObj = {
      element: x,
      min:
        this.minStackItems.length === 0
          ? x
          : Math.min(x, this.minStackItems[this.minStackItems.length - 1].min),
    };

    this.minStackItems.push(elementObj);
  }

  pop(): void {
    this.minStackItems.pop();
  }

  top(): number {
    return this.minStackItems[this.minStackItems.length - 1].element;
  }

  min(): number {
    return this.minStackItems[this.minStackItems.length - 1].min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
