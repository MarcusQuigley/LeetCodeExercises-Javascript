const { preorderTraversal, inorderTraversal, postorderTraversal, symmetricTree, pathSum,univalSubtreeCount
        ,createTree, createTree2, lca } = require('../binaryTree');
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

test('should return correct for CreateTree',()=>{
  var inorder = [9,3,15,20,7];
  var postorder = [9,15,7,20,3];

  var expectedRoot = new binaryNode(3);
  expectedRoot.left = new binaryNode(9);
  expectedRoot.right = new binaryNode(20);
  expectedRoot.right.left = new binaryNode(15);
  expectedRoot.right.right = new binaryNode(7);

  var actual =createTree(inorder,postorder);// createBinaryTreeFromInOrderAndPostOrder(inorder,postorder);
  expect(actual).toEqual(expectedRoot);
});

test('should return correct for CreateTree try2',()=>{
  var inorder = [];
  var postorder = [];

  var expectedRoot = null;

  var actual =createTree(inorder,postorder);
  expect(actual).toEqual(expectedRoot);
});

test('should return correct for CreateTree try3',()=>{
  var inorder = [2,4,6];
  var postorder = [2,6,4];

  var expectedRoot = new binaryNode(4);
  expectedRoot.left = new binaryNode(2);
  expectedRoot.right = new binaryNode(6);

  var actual =createTree(inorder,postorder);
  expect(actual).toEqual(expectedRoot);
});

test('should return correct for CreateTree2 try1',()=>{
  var inorder = [2,4,6];
  var preorder = [4,2,6];

  var expectedRoot = new binaryNode(4);
  expectedRoot.left = new binaryNode(2);
  expectedRoot.right = new binaryNode(6);

  var actual =createTree2(preorder, inorder);
  expect(actual).toEqual(expectedRoot);
});

test('should return correct for CreateTree2 try2',()=>{
  var inorder = [9,3,15,20,7];
  var preorder = [3,9,20,15,7];

  var expectedRoot = new binaryNode(3);
  expectedRoot.left = new binaryNode(9);
  expectedRoot.right = new binaryNode(20);
  expectedRoot.right.left = new binaryNode(15);
  expectedRoot.right.right = new binaryNode(7);
  var actual = createTree2(preorder, inorder);
  expect(actual).toEqual(expectedRoot);
});


test('should return correct for CreateTree2 try3',()=>{
  var inorder = [];
  var preorder = [];

  
  var actual = createTree2(preorder, inorder);
  expect(actual).toEqual(null);
});

test('should return correct for CreateTree2 try4',()=>{
  var inorder = [1,2,3,4];
  var preorder = [1,4,2,3];

  var expectedRoot = new binaryNode(1);
 
  expectedRoot.right = new binaryNode(4);
 
  expectedRoot.right.left = new binaryNode(2);
  expectedRoot.right.left.right = new binaryNode(3);
  var actual = createTree2(preorder, inorder);
  expect(actual).toEqual(expectedRoot);
});

test('lca should be 5',()=>{
  

  var root = new binaryNode(3);
  root.left = new binaryNode(5);
  root.right = new binaryNode(1);
  root.left.left = new binaryNode(6);
  root.left.right = new binaryNode(2);
  root.right.left = new binaryNode(0);
  root.right.right = new binaryNode(8);
  root.left.left.left = new binaryNode(9);
  root.left.right.left = new binaryNode(7);
  root.left.right.right = new binaryNode(4);
  var actual = lca(root, new binaryNode(9),new binaryNode(4));
  expect(actual.value).toEqual(5);
});
