const { preorderTraversal } = require('./BinaryTree/src/binaryTree');
const { binaryNode } = require('./BinaryTree/src/binaryNode')

function init() {
  runBinaryTree();
}

function runBinaryTree() {
  var root = new binaryNode(1);
  root.right = new binaryNode(2);
  root.right.left = new binaryNode(3);

  var result = preorderTraversal(root)
  result.forEach(e => {
    console.log(e);
  });
}

init();