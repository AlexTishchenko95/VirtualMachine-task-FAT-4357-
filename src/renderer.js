'use strict';

export default class Renderer {
  constructor(stack) {
    this.stack = stack;
  }

  getOperandValue() {
    // get value from input field
    return document.getElementById('inputValue').value;
  }

  getOperandOperation() {
    // get value from operation field
    return document.getElementById('operation').value;
  }

  showStack() {
    // show, what you have in stack now (in console)
    console.log('values =', this.stack.values);
    console.log('operation', this.stack.operation);
  }

  clearValueField() {
    document.getElementById('inputValue').value = ''; //clear input field after press button
  }

  writeAnswer(answer) {
    const innerText = document.getElementById('innerText');
    innerText.innerHTML = 'Result = ' + answer;
  }
}
