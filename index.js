'use strict';


class Controller {

    constructor(renderer, stack, executor) {
        this.renderer = renderer;
        this.stack = stack;
        this.executor = executor;
    }


    init() {  // listeners buttons
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

    addToStack() { //handler input button
        const value = this.renderer.getOperandValue();
        this.stack.pushValue(value);
        this.renderer.clearValueField();      
    }

    calculateResult() {  //handler result button
        const op = this.renderer.getOperandOperation();
        this.stack.pushOperation(op);
    }

}


class Renderer {
    constructor (stack) {
        this.stack = stack;
    }

    getOperandValue() {  // get value from input field
        return document.getElementById('inputValue').value;
    }

    getOperandOperation() { // get value from operation field
        return document.getElementById('operation').value;
    }

    showStack() {    // show, what you have in stack now (in console)
        console.log('values =', this.stack.values);
        console.log('operation', this.stack.operation);
        }

    clearOperationField() {
        document.getElementById('operation').value = ''; //clear operation field after press button
    }

    clearValueField() {
        document.getElementById('inputValue').value = ''; //clear input field after press button
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
        renderer.clearOperationField();
        }

    popValue() {
        return this.values;
    }

    popOperation() {
        return this.operation;
    }
}


class CommandExecutor {
    constructor (stack, commandfactory) {
        this.stack = stack;
        this.commandfactory = commandfactory;
    }

    run() { 
        const operation = this.stack.popOperation();
        const operands = this.stack.popValue();
        const command = this.commandfactory.getCommandByOperation(operation);
        if (command == undefined) {
           return 'invalid operation';
        }
        return command.exec(operands);        
    }
}


class MulCommand {
    exec(operands) {
        let answer = 1;
        operands.forEach((item) => answer *= item);
        return answer;
    };
}
 
    
class AddCommand {
    exec(operands) {
        let answer = 0;
        operands.forEach((item) => answer += item);
        return answer;
    };
}


class CommandFactory {

    commands = {
        'add': new AddCommand(),
        'mul': new MulCommand()
    }

    getCommandByOperation(operation) {
        return this.commands[operation];
    }
}


const stack = new Stack();
const renderer = new Renderer(stack);
const commandfactory = new CommandFactory();
const executor = new CommandExecutor(stack, commandfactory);
const controller = new Controller(renderer, stack, executor);

controller.init();



 
