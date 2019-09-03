'use strict';

import MulCommand from './mulCommand.js';
import AddCommand from './addCommand.js';

export default class CommandFactory {
  constructor() {
    this.commands = {
      add: new AddCommand(),
      mul: new MulCommand(),
    };
  }

  getCommandByOperation(operation) {
    return this.commands[operation];
  }
}
