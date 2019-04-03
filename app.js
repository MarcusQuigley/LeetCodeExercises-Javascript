const { preorderTraversal, inorderTraversal ,postorderTraversal, univalSubtreeCount,
        levelorderTraversal, maximumDepthRecursive, symmetricTree,pathSum} 
        = require('./BinaryTree/src/binaryTree');
const { binaryNode } = require('./BinaryTree/src/binaryNode');
const {missingNumber} = require('./Arrays/src/array');

function init() {
  //runBinaryTreepreorderTraversal();
  //runBinaryTreeinorderTraversal();
  //runBinaryTreepostorderTraversal();
  //runlevelorderTraversal();
  //runmaximumDepth();
  //runsymetricTree();
  //runpathSum();
  //runmissingNumber();
  rununivalSubtreeCount();
}

function runBinaryTreepreorderTraversal() {

  // var root = new binaryNode(3);
  // root.left = new binaryNode(1);
  // root.right = new binaryNode(2);
  var root = new binaryNode(1);
  root.left = new binaryNode(4);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(2);
  var result = preorderTraversal(root)
  result.forEach(e => {
    console.log(e);
  });
}

function runBinaryTreeinorderTraversal() {
  var root = new binaryNode(20);
  root.left = new binaryNode(8);
  root.right = new binaryNode(22);
  root.left.left = new binaryNode(4);
  root.left.right = new binaryNode(12);
  root.left.right.left = new binaryNode(10);
  root.left.right.right = new binaryNode(14);
  var results = inorderTraversal(root)
  displayArray(results);
};

function runBinaryTreepostorderTraversal(){
  var root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(4);
  root.right.right = new binaryNode(5);
  var results = postorderTraversal(root);
  displayArray(results);
}

function runlevelorderTraversal(){
  var root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(4);
  root.left.right = new binaryNode(5);
  root.right.left = new binaryNode(6);
  var results = levelorderTraversal(root);
  displayArray(results);

}

function runmaximumDepth(){
  var root = new binaryNode(3);
  root.left = new binaryNode(9);
  root.right = new binaryNode(20);
  root.right.left = new binaryNode(9);
  root.right.right = new binaryNode(9);

  var depth = maximumDepthRecursive(root);
  console.log(`maximumDepth = ${depth}`);
}

function runsymetricTree(){
  root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(2);
  // root.left.left = new binaryNode(3);
  // root.left.right = new binaryNode(4);
  // root.right.left = new binaryNode(4);
  // root.right.right = new binaryNode(3);
  var actual = symmetricTree(root);
  console.log(`is Symmetric: ${actual}`);
}

function runpathSum(){
  root = new binaryNode(3);
  root.left = new binaryNode(4);
  root.right = new binaryNode(2);
  var actual = pathSum(root,5);
  console.log(`is pathSum: ${actual}`);
}

function runmissingNumber(){
  var nums = [0,3,2,1,5];
  var actual = missingNumber(nums);
  console.log(`missingNumber: ${actual}`);
}

function displayArray(result){
  result.forEach(e => {
    console.log(e);
  });
}

function rununivalSubtreeCount(){
  root = new binaryNode(0);
  root.left = new binaryNode(1);
  root.right = new binaryNode(0);
  root.right.left = new binaryNode(1);
  root.right.right = new binaryNode(0);
  // root.right.left.left = new binaryNode(1);
  // root.right.left.right = new binaryNode(1);
  var actual = univalSubtreeCount(root);
};



init();