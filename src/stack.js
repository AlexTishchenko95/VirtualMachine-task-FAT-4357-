'use strict';

export default class Stack {
  constructor() {
    this.values = []; //values mas
    this.operation = ''; //input operation
  }

  pushValue(val) {
    //add input value in values from addToStack method
    this.values.push(+val);
  }

  pushOperation(op) {
    //add input operation in operation from calculateResult method
    this.operation = op;
  }

  clearStack() {
    // clear Stack
    this.values = [];
    this.operation = '';
    console.log('stack is clear!');
  }

  popValue() {
    return this.values;
  }

  popOperation() {
    return this.operation;
  }
}
