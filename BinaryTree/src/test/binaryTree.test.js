const { preorderTraversal, inorderTraversal,postorderTraversal } = require('../binaryTree');
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

test('should output in inorder', () => {
  var root = new binaryNode(20);
  root.left = new binaryNode(8);
  root.right = new binaryNode(22);
  root.left.left = new binaryNode(4);
  root.left.right = new binaryNode(12);
  root.left.right.left = new binaryNode(10);
  root.left.right.right = new binaryNode(14);
  var actual = inorderTraversal(root);
  expect(actual).toEqual([4,8,10,12,14,20,22]);
});

// test('should output in inorder2', () => {
//   var root = new binaryNode(1);
  
//   root.right = new binaryNode(2);
  
//   root.right.left = new binaryNode(3);
  
//   var actual = inorderTraversal(root);
//   expect(actual).toEqual([1,2,3]);
// });

test('should output in postnorder', () => {
  var root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(4);
  root.right.right = new binaryNode(5);
  var actual = postorderTraversal(root);
  expect(actual).toEqual([4,2,5,3,1]);
});