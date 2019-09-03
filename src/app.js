'use strict';

import Controller from './controller.js';
import Renderer from './renderer.js';
import Stack from './stack.js';
import CommandExecutor from './CommandExecutor.js';
import CommandFactory from './CommandFactory.js';

const stack = new Stack();
const renderer = new Renderer(stack);
const commandfactory = new CommandFactory();
const executor = new CommandExecutor(stack, commandfactory);
const controller = new Controller(renderer, stack, executor);

controller.init();
