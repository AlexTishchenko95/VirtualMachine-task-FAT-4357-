'use strict';

export default class Controller {
  constructor(renderer, stack, executor) {
    this.renderer = renderer;
    this.stack = stack;
    this.executor = executor;
  }

  init() {
    // listeners buttons
    document.getElementById('addButton').addEventListener('click', () => {
      this.addToStack();
    });

    document.getElementById('result').addEventListener('click', () => {
      this.calculateResult();
      const answer = this.executor.run();
      this.renderer.writeAnswer(answer);
    });

    document.getElementById('show').addEventListener('click', () => {
      this.renderer.showStack();
    });

    document.getElementById('clear').addEventListener('click', () => {
      this.stack.clearStack();
    });
  }

  addToStack() {
    //handler input button
    const value = this.renderer.getOperandValue();
    this.stack.pushValue(value);
    this.renderer.clearValueField();
  }

  calculateResult() {
    //handler result button
    const op = this.renderer.getOperandOperation();
    this.stack.pushOperation(op);
  }
}
