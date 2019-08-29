'use strict';


class Controller {

    constructor(renderer, stack) {
        this.renderer = renderer;
        this.stack = stack;
    }


    init() {  // listeners buttons
        document.getElementById('addButton').addEventListener('click', () => {
            this.addToStack();
        });

        document.getElementById('result').addEventListener('click', () => {
            this.calculateResult();
            executor.run();
        });

        document.getElementById('show').addEventListener('click', () => {
            renderer.showStack();
            });

        document.getElementById('clear').addEventListener('click', () => {
            stack.clearStack();
        });
    }

    addToStack() { //handler input button
        const value = this.renderer.getOperandValue();
        this.stack.pushValue(value);
        document.getElementById('inputValue').value = ''; //clear input field after press button
        
    }

    calculateResult() {  //handler result button
        const op = this.renderer.getOperandOperation();
        this.stack.pushOperation(op);
    }

}


class Renderer {

    getOperandValue() {  // get value from input field
        return document.getElementById('inputValue').value;
    }

    getOperandOperation() { // get value from operation field
        return document.getElementById('operation').value;
    }

    showStack() {    // show, what you have in stack now (in console)
        console.log('values =', stack.values);
        console.log('operation', stack.operation);
        }

    writeAnswer(answer) {
        const innerText = document.getElementById('innerText');
        innerText.innerHTML = 'Result = ' + answer;
    }
}


class Stack {

    values = [];   //values mas
    operation = "";  //input operation
    
    pushValue(val) {           //add input value in values from addToStack method    
       this.values.push(+val);   
    }
 
    pushOperation(op) {       //add input operation in operation from calculateResult method
       this.operation = op;
    }

    clearStack(){    // clear Stack
        this.values = [];
        this.operation = '';
        console.log('stack is clear!');
        document.getElementById('operation').value = ''; //clear operation field after press button
        }

    popValue() {
        return this.values;
    }
}


class CommandExecutor {

    run() { 
        switch(stack.operation) {
            case 'mul': multiplication.mul();
            break;

            case 'add': addiction.add();
            break;

            default: this.invalidOperation();
        }

    }   
    
    invalidOperation() {
        const answer = 'invalid operation';
        renderer.writeAnswer(answer);
    }
}

class Multiplication {

    mul() {
        let answer = 1;
        const mass = stack.popValue();
        mass.forEach((item) => answer *= item);
        renderer.writeAnswer(answer);
    }
}

class Addiction {

    add(){
        let answer = 0;
        const mass = stack.popValue();
        mass.forEach((item) => answer += item);
        renderer.writeAnswer(answer);
    }
}


const stack = new Stack();
const renderer = new Renderer();
const controller = new Controller(renderer, stack);
const executor = new CommandExecutor();
const multiplication = new Multiplication();
const addiction = new Addiction();

controller.init();




 
