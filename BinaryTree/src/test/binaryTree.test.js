const { preorderTraversal, inorderTraversal, postorderTraversal, symmetricTree, pathSum,univalSubtreeCount
         } = require('../binaryTree');
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

test('should be a symmetric tree',()=>{
  root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(2);
  root.left.left = new binaryNode(3);
  root.left.right = new binaryNode(4);
  root.right.left = new binaryNode(4);
  root.right.right = new binaryNode(3);
  var actual = symmetricTree(root);
  expect(actual).toEqual(true)
});

test('should be true',()=>{
  root = new binaryNode(3);
  root.left = new binaryNode(4);
  root.right = new binaryNode(2);
  var actual = pathSum(root,5);
  expect(actual).toBe(true);
});

test('should be true',()=>{
  root = new binaryNode(3);
  var actual = pathSum(root,3);
  expect(actual).toBe(true);
});

test('should be true',()=>{
  root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(8);
  root.left.left = new binaryNode(3);
  root.left.right = new binaryNode(4);
  root.right.left = new binaryNode(6);
  root.right.right = new binaryNode(7);
  var actual = pathSum(root,15);
  expect(actual).toBe(true);
});

test('should be 3',()=>{
  root = new binaryNode(1);
  root.left = new binaryNode(1);
  root.right = new binaryNode(1);
  var actual = univalSubtreeCount(root);
  expect(actual).toEqual(3);
});

test('should be 3',()=>{
  root = new binaryNode(0);
  root.left = new binaryNode(1);
  root.right = new binaryNode(0);
  root.right.left = new binaryNode(1);
  root.right.right = new binaryNode(0);
  // root.right.left.left = new binaryNode(1);
  // root.right.left.right = new binaryNode(1);
  var actual = univalSubtreeCount(root);
  expect(actual).toEqual(3);
});

test('should be 5',()=>{
  root = new binaryNode(0);
  root.left = new binaryNode(1);
  root.right = new binaryNode(0);
  root.right.left = new binaryNode(1);
  root.right.right = new binaryNode(0);
  root.right.left.left = new binaryNode(1);
  root.right.left.right = new binaryNode(1);
  var actual = univalSubtreeCount(root);
  expect(actual).toEqual(5);
});