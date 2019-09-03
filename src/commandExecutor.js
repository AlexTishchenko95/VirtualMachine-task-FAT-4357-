'use strict';

export default class CommandExecutor {
  constructor(stack, commandfactory) {
    this.stack = stack;
    this.commandfactory = commandfactory;
  }

  run() {
    const operation = this.stack.popOperation();
    const operands = this.stack.popValue();
    const command = this.commandfactory.getCommandByOperation(operation);
    if (command === undefined) {
      return 'invalid operation';
    }
    return command.exec(operands);
  }
}
