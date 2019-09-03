'use strict';

export default class AddCommand {
  exec(operands) {
    let answer = 0;
    operands.forEach(item => (answer += item));
    return answer;
  }
}
