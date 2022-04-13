import { helper } from '@ember/component/helper';

export default helper(function numToArray(params) {
  return Array(params[0]);
});
