class CQueue {
  // 创建两个栈(输入栈、输出栈)，数组模拟
  private stackIn: Array<number | undefined>;
  private stackOut: Array<number | undefined>;

  constructor() {
    this.stackIn = new Array();
    this.stackOut = new Array();
  }

  appendTail(value: number): void {
    this.stackIn.push(value);
  }

  deleteHead(): number | undefined {
    if (!this.stackIn.length && !this.stackOut.length) {
      return -1;
    }
    if (!this.stackOut.length) {
      while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
      }
    }

    return this.stackOut.pop();
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
