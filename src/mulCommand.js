'use strict';

export default class MulCommand {
  exec(operands) {
    let answer = 1;
    operands.forEach(item => (answer *= item));
    return answer;
  }
}
