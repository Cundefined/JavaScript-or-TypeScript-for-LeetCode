class MyStack {
  queue: Array<number | undefined>;
  constructor() {
    this.queue = [];
  }

  push(x: number | undefined): void {
    this.queue[this.queue.length] = x;
  }

  pop(): number | undefined {
    if (this.queue.length > 1) {
      for (let i = 0; i < this.queue.length - 1; i++) {
        this.push(this.queue.shift());
      }
    }
    return this.queue.shift();
  }

  top(): number | undefined {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
