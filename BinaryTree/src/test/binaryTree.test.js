const { preorderTraversal } = require('../binaryTree');
const { binaryNode } = require('../binaryNode');

test('should output in preorder2', () => {
  var root = new binaryNode(3);
  root.left = new binaryNode(1);
  root.right = new binaryNode(2);
  
  var actual = preorderTraversal(root);
  expect(actual).toEqual([3, 1, 2]);
});

test('should output in preorder2', () => {
  var root = new binaryNode(1);
  root.left = new binaryNode(4);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(2);
  var actual = preorderTraversal(root);
  expect(actual).toEqual([1,4,2,3]);
});