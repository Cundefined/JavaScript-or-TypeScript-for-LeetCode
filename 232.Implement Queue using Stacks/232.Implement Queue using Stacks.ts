class MyQueue {
  inputStack: number[];
  outputStack: number[];
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(x: number): void {
    this.inputStack.push(x);
  }

  pop(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length !== 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }

    return this.outputStack.pop();
  }

  peek(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length !== 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }

    return this.outputStack[this.outputStack.length - 1];
  }

  empty(): boolean {
    if (this.inputStack.length === 0 && this.outputStack.length === 0) {
      return true;
    }

    return false;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
