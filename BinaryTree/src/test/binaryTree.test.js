const { preorderTraversal } = require('../binaryTree');
const { binaryNode } = require('../binaryNode');

test('should output in preorder', () => {
  var root = new binaryNode(1);
  root.left = null;
  root.right = new binaryNode(2);
  root.right.left = new binaryNode(3);
  var actual = preorderTraversal(root);
  expect(actual).toEqual([1, 2, 3]);
});