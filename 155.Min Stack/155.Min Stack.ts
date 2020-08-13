class MinStack {
  minStackItems: Array<number>;
  assistStackItems: Array<number>;
  constructor() {
    this.minStackItems = [];
    this.assistStackItems = [];
  }

  push(x: number): void {
    this.minStackItems.push(x);
    if (
      this.assistStackItems.length === 0 ||
      x <= this.assistStackItems[this.assistStackItems.length - 1]
    ) {
      this.assistStackItems.push(x);
    }
  }

  pop(): void {
    let tempOut: any = this.minStackItems.pop();
    if (this.assistStackItems[this.assistStackItems.length - 1] === tempOut) {
      this.assistStackItems.pop();
    }
  }

  top(): number {
    return this.minStackItems[this.minStackItems.length - 1];
  }

  getMin(): number {
    return this.assistStackItems[this.assistStackItems.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
