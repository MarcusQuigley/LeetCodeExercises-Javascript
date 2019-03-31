const{sum} = require('../binaryTree');

test('should output correct sum',()=>{
  var actual = sum(4,4);
  expect(actual).toBe(8);
});