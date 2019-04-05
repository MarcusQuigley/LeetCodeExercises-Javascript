const { preorderTraversal, inorderTraversal ,postorderTraversal, univalSubtreeCount,
        levelorderTraversal, maximumDepthRecursive, symmetricTree,pathSum,createTree, createTree2,
         lca, recursiveTraversal, binaryTreeSame, nextrightpointer1,nextrightpointer2, nextrightpointer3
      } 
        = require('./BinaryTree/src/binaryTree');
const { binaryNode } = require('./BinaryTree/src/binaryNode');
const {binaryNodeNext} = require('./BinaryTree/src/binaryNodeNext');
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
  //rununivalSubtreeCount();
  //runcreateBinaryTreeFromInOrderAndPostOrder2();
  //runCreateTree2();
  //runprintBinaryTreeUp();
  //runlca();
  //runrecursiveTraversal();
  //runbinaryTreeSame();
  //runnextrightpointer1();
  runnextrightpointer2();
}

function displayArray(result){
  result.forEach(e => {
    console.log(e);
  });
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

function runcreateBinaryTreeFromInOrderAndPostOrder(){
  //var inorder = [9,3,20];
  //var postorder = [9,20,3];
  var inorder = [9,3,15,20,7];
  var postorder = [9,15,7,20,3];
  var tree =createTree(inorder,postorder);// createBinaryTreeFromInOrderAndPostOrder(inorder,postorder);

  var expectedRoot = new binaryNode(3);
  expectedRoot.left = new binaryNode(9);
  expectedRoot.right = new binaryNode(20);
  expectedRoot.right.left = new binaryNode(15);
  expectedRoot.right.right = new binaryNode(7);
  console.log(tree);
 
};

function runcreateBinaryTreeFromInOrderAndPostOrder2(){
  //var inorder = [9,3,20];
  //var postorder = [9,20,3];
  // var inorder = [];
  // var postorder = [];
  // var inorder = [2,4,6];
  // var postorder = [2,6,4];
  var inorder = [1,2,3,4,5];
  var postorder = [2,1,5,4,3];
    
  var tree =createTree(inorder,postorder);// createBinaryTreeFromInOrderAndPostOrder(inorder,postorder);

   
  console.log(tree);
 
};

function runCreateTree2(){
  // var inorder = [1,2,3,4];
  // var preorder = [1,4,2,3];
  var preorder = [1,2,3,4];
  var inorder = [1,4,2,3];

  var tree =createTree2(preorder, inorder);
  console.log(tree);
  // var expectedRoot = new binaryNode(1);
 
  // expectedRoot.right = new binaryNode(2);
 
  // expectedRoot.right.right = new binaryNode(3);
  // expectedRoot.right.right.right = new binaryNode(4);
}
 
var buildTree = function(inorderList, postorderList) {
  if (!postorderList.length) return null;
  
  const root = postorderList.pop();
  //const node = new TreeNode(root);
  const node = new binaryNode(root);
  const rootIndex = inorderList.indexOf(root);
  
  const leftInorderList = inorderList.slice(0, rootIndex);
  const rightInorderList = inorderList.slice(rootIndex + 1);
  
  const leftPostOrderList = postorderList.slice(0, leftInorderList.length);
  const rightPostOrderList = postorderList.slice(leftPostOrderList.length);

  node.left = leftInorderList.length ? buildTree(leftInorderList, leftPostOrderList) : null;
  node.right = rightInorderList.length ? buildTree(rightInorderList, rightPostOrderList) : null;

  return node;
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

function runprintBinaryTreeUp(){
  var root = new binaryNode(3);
  root.left = new binaryNode(9);
  root.right = new binaryNode(20);
    root.left.left = new binaryNode(15);
  // root.left.left.left = new binaryNode(19);
   root.left.right = new binaryNode(7);
  // root.right.left = new binaryNode(15);
  // root.right.right = new binaryNode(17);
}

function runlca(){
  var root = new binaryNode(3);
  root.left = new binaryNode(5);
  root.right = new binaryNode(1);
  root.left.left = new binaryNode(6);
  root.left.right = new binaryNode(2);
  root.right.left = new binaryNode(0);
  // root.right.right = new binaryNode(8);
  // root.left.left.left = new binaryNode(9);
  // root.left.right.left = new binaryNode(7);
  // root.left.right.right = new binaryNode(4);
  var actual = lca(root, new binaryNode(5),new binaryNode(1));
  console.log(`lca: ${actual.value}`);
}

function runrecursiveTraversal(){
  var root = new binaryNode(3);
  root.left = new binaryNode(5);
  root.right = new binaryNode(1);
  // root.left.left = new binaryNode(6);
  // root.left.right = new binaryNode(2);
  // root.right.left = new binaryNode(0);
  // root.right.right = new binaryNode(8);
  // root.left.left.left = new binaryNode(9);
  // root.left.right.left = new binaryNode(7);
  // root.left.right.right = new binaryNode(4);
    recursiveTraversal(root);
  //console.log(`lca: ${actual.value}`);
}

function runbinaryTreeSame(){
  var p = new binaryNode(3);
  
  p.right = new binaryNode(1);
  p.right.left = new binaryNode(5);
  //root.left.left = new binaryNode(6);
  var q = new binaryNode(3);
  //q.left = new binaryNode(5);
  q.right = new binaryNode(1);
  q.right.left = new binaryNode(5);

  var answer = binaryTreeSame(p,q);
  console.log(answer);
}

function runnextrightpointer1(){
  var root = new binaryNodeNext(1);
  root.left = new binaryNodeNext(2);
  root.right = new binaryNodeNext(3);
  root.left.left = new binaryNodeNext(4);
  root.left.right = new binaryNodeNext(5);
  root.right.left = new binaryNodeNext(6);
  root.right.right = new binaryNodeNext(7);

  var result = nextrightpointer1(root);
console.log(result);
}

function runnextrightpointer2(){
  var root = new binaryNodeNext(1);
  root.left = new binaryNodeNext(2);
  root.right = new binaryNodeNext(3);
  root.left.left = new binaryNodeNext(4);
  root.left.right = new binaryNodeNext(5);
   
  root.right.right = new binaryNodeNext(7);

  //var result = nextrightpointer2(root);
  var result = nextrightpointer3(root);
console.log(result);
}


init();