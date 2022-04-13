import { helper } from '@ember/component/helper';
import { sum } from '@ember/object/computed';

export default helper(function adder(params) {
  if(params.length === 1) {
    return params[0] + 1;
  }

  let sum = 0;
  params.forEach(param => {
    sum += param;
  })

  return sum;
});

// {{adder index porom}}
